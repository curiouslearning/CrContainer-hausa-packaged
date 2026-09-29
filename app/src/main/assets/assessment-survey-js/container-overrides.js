/*
 * Container-specific UI that the upstream assessment-survey-js bundle does not render:
 * - Start screen close button (hidden once the game starts, as in the old dist/bundle.js)
 * - Final score screen: double-tap "Score recorded" to confirm (button turns green, close button appears)
 *
 * Must be loaded BEFORE bundle.js: it hooks window.postMessage to receive the
 * {type: "assessment_completed", score} message the bundle posts to window.parent when a game ends.
 */
(function () {
  var STORAGE_KEY = "assessment_final_score";
  var DOUBLE_TAP_WINDOW_MS = 500;

  function closeWebView() {
    if (window.Android && typeof window.Android.closeWebView === "function") {
      window.Android.closeWebView();
    } else {
      console.log("Android.closeWebView() not available");
    }
  }

  function hideGameScreens() {
    ["landWrap", "gameWrap", "endWrap"].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.style.display = "none";
    });
  }

  // ---------------------------------------------------------------------------
  // Final score screen
  // ---------------------------------------------------------------------------
  var FinalScoreScreen = {
    navigationLocked: false,
    eventListenersSetup: false,
    scoreConfirmed: false,
    tapCount: 0,
    lastTapTime: 0,
    tapResetTimer: null,
    pressStartTime: 0,

    init: function () {
      this.scoreContainer = document.getElementById("finalScoreScreen");
      this.scoreValueElement = document.getElementById("finalScoreValue");
      this.assessmentNameElement = document.getElementById("finalAssessmentName");
      this.confirmButton = document.getElementById("finalScoreConfirmButton");
      this.closeButton = document.getElementById("finalScoreCloseButton");
      if (this.closeButton) this.closeButton.style.display = "none";
      this.setupEventListeners();
    },

    isVisible: function () {
      return !!this.scoreContainer && this.scoreContainer.style.display !== "none";
    },

    preventContextMenu: function (e) {
      if (FinalScoreScreen.navigationLocked) {
        e.preventDefault();
        e.stopPropagation();
      }
    },

    preventKeyboardShortcuts: function (e) {
      if (!FinalScoreScreen.navigationLocked) return;
      if (
        e.key === "Escape" ||
        (e.key === "Backspace" && e.target.tagName !== "INPUT") ||
        e.key === "F5" ||
        (e.ctrlKey && (e.key === "r" || e.key === "R"))
      ) {
        e.preventDefault();
        e.stopPropagation();
      }
    },

    androidBackButtonHandler: function (e) {
      if (FinalScoreScreen.navigationLocked) {
        window.history.pushState(null, "", window.location.href);
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    },

    setupEventListeners: function () {
      var self = this;
      if (this.eventListenersSetup || !this.confirmButton) return;

      this.confirmButton.addEventListener("touchstart", function (e) { self.handlePressStart(e); });
      this.confirmButton.addEventListener("touchend", function (e) { self.handlePressEnd(e); });
      this.confirmButton.addEventListener("mousedown", function (e) { self.handlePressStart(e); });
      this.confirmButton.addEventListener("mouseup", function (e) { self.handlePressEnd(e); });
      this.confirmButton.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      });

      if (this.closeButton) {
        this.closeButton.addEventListener("click", function (e) {
          if (self.isScoreConfirmed()) {
            self.hide();
            closeWebView();
          }
          e.preventDefault();
          e.stopPropagation();
        });
      }

      document.addEventListener(
        "touchmove",
        function (e) {
          if (self.navigationLocked && self.isVisible()) {
            e.preventDefault();
            e.stopPropagation();
            return false;
          }
        },
        { passive: false }
      );
      window.addEventListener("popstate", this.androidBackButtonHandler);
      window.history.pushState(null, "", window.location.href);
      this.eventListenersSetup = true;
    },

    handlePressStart: function () {
      this.pressStartTime = Date.now();
    },

    // preventDefault on touchend also suppresses the emulated mouse events, so a tap counts once
    handlePressEnd: function (e) {
      e.preventDefault();
      e.stopPropagation();
      var pressDuration = Date.now() - this.pressStartTime;
      if (!this.scoreConfirmed && pressDuration < 400) this.recordTap();
    },

    recordTap: function () {
      var self = this;
      var now = Date.now();
      if (this.tapResetTimer !== null) {
        window.clearTimeout(this.tapResetTimer);
        this.tapResetTimer = null;
      }
      if (now - this.lastTapTime > DOUBLE_TAP_WINDOW_MS) this.tapCount = 0;
      this.tapCount += 1;
      this.lastTapTime = now;
      if (this.tapCount >= 2) {
        this.tapCount = 0;
        this.confirmScore();
      } else {
        this.tapResetTimer = window.setTimeout(function () {
          self.tapCount = 0;
          self.tapResetTimer = null;
        }, DOUBLE_TAP_WINDOW_MS);
      }
    },

    triggerHapticFeedback: function () {
      if (window.Android && window.Android.vibrate) {
        window.Android.vibrate(50);
      } else if (navigator.vibrate) {
        navigator.vibrate(50);
      }
    },

    // Double tap confirms the score: button turns green and the close button is enabled
    confirmScore: function () {
      this.scoreConfirmed = true;
      var data = this.getStoredScoreData();
      if (data) {
        data.scoreConfirmed = true;
        this.saveScoreData(data);
      }
      this.confirmButton.classList.add("confirmed");
      this.triggerHapticFeedback();
      this.unlockNavigation();
      if (this.closeButton) {
        this.closeButton.style.display = "";
        this.closeButton.classList.add("enabled");
      }
    },

    getAssessmentDisplayName: function (type) {
      var t = (type || "").toLowerCase().trim();
      if (t.includes("letter-sound") || t.includes("lettersound")) return "Letter Sounds";
      if (t.includes("sight-word") || t.includes("sightword")) return "Sight Words";
      if (t.includes("spelling")) return "Spellings";
      if (t.includes("letter")) return "Letter Sounds";
      if (t.includes("sight") || t.includes("word")) return "Sight Words";
      return "Assessment";
    },

    resetInteractionState: function () {
      this.scoreConfirmed = false;
      this.confirmButton.classList.remove("confirmed");
      this.tapCount = 0;
      this.lastTapTime = 0;
      if (this.tapResetTimer !== null) {
        window.clearTimeout(this.tapResetTimer);
        this.tapResetTimer = null;
      }
      if (this.closeButton) {
        this.closeButton.style.display = "none";
        this.closeButton.classList.remove("enabled");
      }
    },

    show: function (score, assessmentType) {
      var assessmentName = this.getAssessmentDisplayName(assessmentType);
      this.saveScoreData({
        score: score,
        assessmentName: assessmentName,
        scoreConfirmed: false,
        timestamp: Date.now(),
      });
      this.render(score, assessmentName);
    },

    render: function (score, assessmentName) {
      this.scoreValueElement.textContent = String(score);
      this.assessmentNameElement.textContent = assessmentName;
      this.resetInteractionState();
      this.scoreContainer.style.display = "flex";
      this.lockNavigation();
      hideGameScreens();
      LandingCloseButton.sync();
    },

    hide: function () {
      this.scoreContainer.style.display = "none";
    },

    // Re-show an unconfirmed score after the app was killed/reopened
    checkAndRestore: function () {
      var data = this.getStoredScoreData();
      if (data && !data.scoreConfirmed) {
        this.render(data.score, data.assessmentName);
        return true;
      }
      return false;
    },

    lockNavigation: function () {
      this.navigationLocked = true;
      if (this.closeButton) {
        this.closeButton.style.display = "none";
        this.closeButton.classList.remove("enabled");
      }
      window.history.pushState(null, "", window.location.href);
      if (window.Android && window.Android.disableBackButton) window.Android.disableBackButton(true);
      document.addEventListener("contextmenu", this.preventContextMenu, true);
      document.addEventListener("keydown", this.preventKeyboardShortcuts, true);
    },

    unlockNavigation: function () {
      var self = this;
      this.navigationLocked = false;
      if (window.Android && window.Android.disableBackButton) window.Android.disableBackButton(false);
      document.removeEventListener("contextmenu", this.preventContextMenu, true);
      document.removeEventListener("keydown", this.preventKeyboardShortcuts, true);
      setTimeout(function () {
        self.clearStoredScoreData();
      }, 1000);
    },

    saveScoreData: function (data) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      } catch (e) {
        console.error("Failed to save score data:", e);
      }
    },

    getStoredScoreData: function () {
      try {
        var raw = localStorage.getItem(STORAGE_KEY);
        if (raw) return JSON.parse(raw);
      } catch (e) {
        console.error("Failed to retrieve score data:", e);
      }
      return null;
    },

    clearStoredScoreData: function () {
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch (e) {
        console.error("Failed to clear score data:", e);
      }
    },

    isScoreConfirmed: function () {
      var data = this.getStoredScoreData();
      return !data || data.scoreConfirmed;
    },
  };

  // ---------------------------------------------------------------------------
  // Start screen close button: visible only while the start screen is shown
  // ---------------------------------------------------------------------------
  var LandingCloseButton = {
    init: function () {
      var self = this;
      this.button = document.getElementById("landingPageCloseButton");
      this.root = document.getElementById("assessment-survey-root");
      this.landing = null;

      this.button.addEventListener("click", function (e) {
        e.stopPropagation();
        closeWebView();
      });

      // The bundle renders #landWrap asynchronously; wait for it, then watch only its style
      var rootObserver = new MutationObserver(function () {
        var landing = document.getElementById("landWrap");
        if (landing && landing !== self.landing) {
          self.landing = landing;
          new MutationObserver(function () { self.sync(); }).observe(landing, {
            attributes: true,
            attributeFilter: ["style"],
          });
        }
        self.sync();
      });
      rootObserver.observe(this.root, { childList: true, subtree: true });
      this.sync();
    },

    sync: function () {
      if (!this.button) return;
      var landing = document.getElementById("landWrap");
      var onStartScreen = !!landing && landing.style.display !== "none" && !FinalScoreScreen.isVisible();
      this.button.style.display = onStartScreen ? "" : "none";
    },
  };

  // ---------------------------------------------------------------------------
  // Hook the bundle's end-of-game message. In the Android WebView window.parent === window,
  // so the bundle's window.parent.postMessage(...) lands here.
  // ---------------------------------------------------------------------------
  var originalPostMessage = window.postMessage.bind(window);
  window.postMessage = function (message) {
    if (message && message.type === "assessment_completed") {
      var type = new URLSearchParams(window.location.search).get("data");
      // Defer so the bundle's own showEnd() runs first; the score screen then hides it
      setTimeout(function () {
        FinalScoreScreen.show(message.score, type);
      }, 0);
    }
    try {
      return originalPostMessage.apply(window, arguments);
    } catch (e) {
      console.log("postMessage failed:", e);
    }
  };

  document.addEventListener("DOMContentLoaded", function () {
    FinalScoreScreen.init();
    LandingCloseButton.init();
    if (FinalScoreScreen.checkAndRestore()) {
      console.log("Unconfirmed score found. Showing score screen.");
    }
  });
})();
