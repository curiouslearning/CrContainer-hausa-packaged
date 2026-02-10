importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js"
);
workbox.precaching.precacheAndRoute([{"revision":"c5977ce9c754b5132685edd57010bd0a","url":"assets/audios/are-you-sure.mp3"},{"revision":"ec214e1eef89105b484900ac15d92649","url":"assets/audios/ButtonClick.mp3"},{"revision":"502d2c741145a1cae081c73a9a31adc8","url":"assets/audios/Cheering-01.mp3"},{"revision":"53a8bfd7392adf8910b433ce13ab4af0","url":"assets/audios/Cheering-02.mp3"},{"revision":"5197225d0e79a19d50e75000128fd3d2","url":"assets/audios/Cheering-03.mp3"},{"revision":"9d98684dcd9532f8631cce867fff0c13","url":"assets/audios/CorrectStoneFinal.mp3"},{"revision":"2b618f2c7e6376442b80fb2899c14c46","url":"assets/audios/Evolution/Poof.mp3"},{"revision":"d0efe0e10e4d3bfaaf9cd3e305ad792f","url":"assets/audios/Evolution/Swoosh.mp3"},{"revision":"21a9071743deb5ef58f5a44ced6ec3ac","url":"assets/audios/intro.mp3"},{"revision":"2e2aef8d69e8463e7fa0fca5dabdcff5","url":"assets/audios/jar_filling.mp3"},{"revision":"c7797499dce70cb7e5769dfca9af1808","url":"assets/audios/JarProgression/BonusSFX.mp3"},{"revision":"a8ceddb48f4308e541ea5c9a2f8098f7","url":"assets/audios/JarProgression/JarFillSFX.mp3"},{"revision":"09e16803fca452dcf05efafe62e1e008","url":"assets/audios/JarProgression/MatchboxSFX.mp3"},{"revision":"91495cbb34cc69bec8e0f9538a6d69ae","url":"assets/audios/JarProgression/ShineSFX.mp3"},{"revision":"fd2554f098a5aac784a40fd28b885ebb","url":"assets/audios/JarProgression/SwooshSFX.mp3"},{"revision":"6136d62b03b9a373e45219606edbb877","url":"assets/audios/LevelLoseFanfare.mp3"},{"revision":"7c86597b8546ae3274789bf8bc1ed9a0","url":"assets/audios/LevelWinFanfare.mp3"},{"revision":"6119285ecbc7ca75700b9912cb4190ae","url":"assets/audios/matchbox.mp3"},{"revision":"3a43e7af253731c3e6e9d4f7c91ed7e2","url":"assets/audios/monster_discovered_fanfare.mp3"},{"revision":"64830c03d736574fe43a586e13474647","url":"assets/audios/monster_evolve.mp3"},{"revision":"2431a6bb00bfeecfb2d5404bdd087b24","url":"assets/audios/MonsterGameplay/Disappointed.mp3"},{"revision":"5ef47da84396ad9a4b83235b87211c04","url":"assets/audios/MonsterGameplay/Eat.mp3"},{"revision":"227040add97b1daecd5c21c2623e480a","url":"assets/audios/MonsterGameplay/Spit.mp3"},{"revision":"227040add97b1daecd5c21c2623e480a","url":"assets/audios/MonsterSpit.mp3"},{"revision":"cf0c6919347cc45bc20028d6155aa5d7","url":"assets/audios/onDrag.mp3"},{"revision":"828da03d5334d4d2a5ef162941982807","url":"assets/audios/PointsAdd.wav"},{"revision":"fb879d5911b7d8de23e56c039bc7c64a","url":"assets/audios/shine.mp3"},{"revision":"3c3549c2dc141e1c08f5ccba6b3294f1","url":"assets/audios/star_whoosh_and_poof.mp3"},{"revision":"f1b60a50f398d85c9bcc03810adaef6e","url":"assets/audios/stone_burn.mp3"},{"revision":"1cfd01f2534d1d4fffce9517ef8539de","url":"assets/audios/surprise-bonus-star.mp3"},{"revision":"01b126cea59d55d6e120d33f07aef228","url":"assets/audios/swoosh.mp3"},{"revision":"685da4a6886babc85061d0ab8224a0cf","url":"assets/audios/timeout.mp3"},{"revision":"58c1f4e310f54cf7ffad8ccaac02e305","url":"assets/audios/treasure_miniGame.mp3"},{"revision":"55824fa039c80272153e42d7fd419d32","url":"assets/images/audio_icon.png"},{"revision":"7fe5017810edcafd41d12bd23c0046d6","url":"assets/images/Autumn_bg_v01.webp"},{"revision":"c1faadf17b183089038d2a6a359a67fc","url":"assets/images/Autumn_fence_v01.png"},{"revision":"862c295effcb72aac9f1a9826d3baae8","url":"assets/images/Autumn_fence_v01.webp"},{"revision":"86393c975f42233b8548e6dcb844c0c7","url":"assets/images/Autumn_FG_v01.png"},{"revision":"2c8c0d05efda1d7c0d8c4b4c2dfdca06","url":"assets/images/Autumn_hill.webp"},{"revision":"f3187610fd203a4e83f1a6ca42b92701","url":"assets/images/Autumn_sign_v01.png"},{"revision":"7432f4abb9a3a9a0270c45581f7ed2a8","url":"assets/images/Autumn_sign_v01.webp"},{"revision":"fef6df8aa9ba2e9d3a995ea8bd858b50","url":"assets/images/back_btn.svg"},{"revision":"8392633b41bc6a1c95d29c9f2ddb845f","url":"assets/images/bg_v01.webp"},{"revision":"a418d263699f30b8fda69a26324e1065","url":"assets/images/blue_star.svg"},{"revision":"a6cafa86a6e26fbf9c9a6a67766266d3","url":"assets/images/Chest_Done_Level.png"},{"revision":"e55b1b0b143748165f14b932a57bbfd6","url":"assets/images/Chest_Ongoing_Level.png"},{"revision":"f8c6022001c9cc0944057fba96e3f8f7","url":"assets/images/chest.svg"},{"revision":"ada9572284772024a53c856bfcac44de","url":"assets/images/close_btn.svg"},{"revision":"435afb89237c17e1dd82a9ab3d5cce05","url":"assets/images/closedchest.svg"},{"revision":"93324625f6b250c840a4c845d6a4d195","url":"assets/images/cloud_01.png"},{"revision":"0208ccae7af055011d300e720b03a0ed","url":"assets/images/cloud_02.png"},{"revision":"2d17eefbe310cc0c68f15942e8fc2b7c","url":"assets/images/cloud_03.png"},{"revision":"8eccd782c8e1116debe6efe5cdb1954b","url":"assets/images/confirm_btn.svg"},{"revision":"862d49036360e77e5086a4c1e1a5b12b","url":"assets/images/drag11.png"},{"revision":"ce98c9e785191b4b5dec43d9c42a1943","url":"assets/images/drag12.png"},{"revision":"3242e6a9486af3aa13d11fc56aa396a5","url":"assets/images/drag13.png"},{"revision":"6577a2f8480fd3c9e5907aad8078367c","url":"assets/images/drag14.png"},{"revision":"b653a7ca1a76b27b9f648b2595997691","url":"assets/images/eat11.png"},{"revision":"c48c407dcd6d835af787f78676125925","url":"assets/images/eat12.png"},{"revision":"eccaa95cdb97eda5fa1c019f18d616cc","url":"assets/images/eat13.png"},{"revision":"83a2679d95f81b6c55597b68a178c611","url":"assets/images/eat14.png"},{"revision":"34660bc9a2ac6065804aa1a68e80fc3b","url":"assets/images/favicon.png"},{"revision":"08c13cf2d001c34a061bc50569aa9a70","url":"assets/images/fence_v01.webp"},{"revision":"a267e28cb011391c1df9d59f8f2b5795","url":"assets/images/FG_a_v01.png"},{"revision":"d6ac191de224ec4be62cd9b639b17e9e","url":"assets/images/ftm_bonus_level_monsters.png"},{"revision":"88191ea3184553a3c61342be81a3de4e","url":"assets/images/happy11.png"},{"revision":"a4d0ffff34fa52231965cedff12b7719","url":"assets/images/happy12.png"},{"revision":"110844874baac6a2ba2b814e11f46a2a","url":"assets/images/happy13.png"},{"revision":"f9e96cc182dc3d2b4df737eff3f6b75f","url":"assets/images/happy14.png"},{"revision":"b8e4926547b8f91bf991ba9d202bf97f","url":"assets/images/hill.webp"},{"revision":"63beece149302bc8ce50401afb098811","url":"assets/images/idle11.png"},{"revision":"1347d43e37481de1101b574ed3892fe6","url":"assets/images/idle12.png"},{"revision":"c9885ccbfd7600374a41dea8605b216f","url":"assets/images/idle13.png"},{"revision":"31d4bea6474f82d2939d48e319e27337","url":"assets/images/idle14.png"},{"revision":"d3316f6e45930df8cdb01f0dbe2aa26c","url":"assets/images/idle4.png"},{"revision":"1158c71cdf0c30da215268385d54cd99","url":"assets/images/level-container.svg"},{"revision":"38e43cd7b492b624fc3da67dea7b0433","url":"assets/images/loadingImg.gif"},{"revision":"99f1ee99646ca7651b031fc4f97f9d44","url":"assets/images/map_btn.svg"},{"revision":"76f43b471d06617a870d3334cc555aa4","url":"assets/images/map.webp"},{"revision":"ebc4d9a3b34635ff6729b9995653d5c0","url":"assets/images/mapIcon.png"},{"revision":"c312ed45360c23d5302c7eca60acaf2d","url":"assets/images/mapLock.png"},{"revision":"aadabeedb05b52faeddeae142e84505c","url":"assets/images/mapLock.webp"},{"revision":"49a92732932c4ff385d082c22b690d6d","url":"assets/images/next_btn.svg"},{"revision":"dbe7bbce3b1c803dee68c74b41b108c2","url":"assets/images/Pause_Button.svg"},{"revision":"178ab1569622719b2d1fa7677f64bcf6","url":"assets/images/phaseBackground_1.webp"},{"revision":"7c428669e49bf5200127be6463b97cfe","url":"assets/images/phaseBackground_2.webp"},{"revision":"d7b6ae972a2793da95d5b955a8d9e04c","url":"assets/images/phaseBackground_3.webp"},{"revision":"d41634fb17b2125c697992b2ed9b6e75","url":"assets/images/phaseBackground_4.webp"},{"revision":"74f12a9913703f7786c28632247d5cef","url":"assets/images/Pink_Stone.svg"},{"revision":"f4cbd28cc5445e9b6ba0331701481a6c","url":"assets/images/pinStar1.svg"},{"revision":"2c80643d68bb9ef44d919cddb5afe842","url":"assets/images/pinStar2.svg"},{"revision":"33289a075e0dc57b55059372c0158c35","url":"assets/images/pinStar3.svg"},{"revision":"7152912133b2a7788a53aff505e8d054","url":"assets/images/Play_button.svg"},{"revision":"655781f355cc2ae06dc144a254d18ef5","url":"assets/images/popup_bg_v01.svg"},{"revision":"1efa3dab339055833cf0d773884e0f60","url":"assets/images/Prompt_Text_BG.svg"},{"revision":"07208f75d6caa1e1dddf65d7d3dd5088","url":"assets/images/promptPlayButton.png"},{"revision":"618714f510d475a8f1e66e62cccfb874","url":"assets/images/promptPlayButton.webp"},{"revision":"1efced42d46b1b642f73b448669216b6","url":"assets/images/retry_btn.svg"},{"revision":"e7d070072a84c81493d34fbcb9d56a05","url":"assets/images/sad11.png"},{"revision":"562dd11921b6ef4883f72e0965dbd271","url":"assets/images/sad12.png"},{"revision":"43b013bf5367385326d1f0d1729bde50","url":"assets/images/sad13.png"},{"revision":"a6f030e270350c7d3528887091713904","url":"assets/images/sad14.png"},{"revision":"6736c9d8a52dc1a2d9eb69bdf79d3c96","url":"assets/images/score_v01.png"},{"revision":"82a054d2def94b7313fe16acd1d1aaa1","url":"assets/images/spit11.png"},{"revision":"0208212ec260f5a4a259ccb5c8fe9d85","url":"assets/images/spit12.png"},{"revision":"bd4e366359de6d4c847672ef20b9b5f6","url":"assets/images/spit13.png"},{"revision":"ee6e8131c5146107bd00f74cec3d1954","url":"assets/images/spit14.png"},{"revision":"f8fa7d7894faecd1f5d1db785c058a7b","url":"assets/images/star-empty.svg"},{"revision":"d56031f10c2063ba89bcb733c15e6b81","url":"assets/images/star-filled.svg"},{"revision":"ad3037a2f54a38e25b216512a523f6bc","url":"assets/images/star.png"},{"revision":"3dca5c6ea60282fae30e617f761e131a","url":"assets/images/star.webp"},{"revision":"b6e5b8e9720991194a8f6bc9c703b6c1","url":"assets/images/stone_blue.png"},{"revision":"8167eb33d6d13478797f2c80db8e6644","url":"assets/images/stone_blue.svg"},{"revision":"50bb6e41b335cbb5c27764f3ed98dd6d","url":"assets/images/stone_burn_export_1.png"},{"revision":"8880aafcd4694e89167dd16f9bad4fd6","url":"assets/images/stone_burn_export_2.png"},{"revision":"b34dd2bf4a4ac0010babff4be6fe6149","url":"assets/images/stone_burn_export_3.png"},{"revision":"6689da20db834b7e35479a4fa387cffa","url":"assets/images/stone_burn_export_4.png"},{"revision":"80e3f39ff0fdd17298b7871fbf7456a2","url":"assets/images/stone_pink_v02.png"},{"revision":"a125a16dfe040421e67c7bb41a14f698","url":"assets/images/stone_pink.webp"},{"revision":"dedc36f425f5ce6d0cbeda96397f94f6","url":"assets/images/timer_emptynew.svg"},{"revision":"a0daffbd1cf6fd94e7c761bf442ca029","url":"assets/images/timer_emptynew.webp"},{"revision":"3a7950bb659213c8916606c269fe2255","url":"assets/images/timer_new.svg"},{"revision":"64a325ee680c6b13a4b6864fa08720b6","url":"assets/images/Totem_v02_v01.webp"},{"revision":"429e78f2d287657395c3071935c4b4e6","url":"assets/images/tree-log.svg"},{"revision":"8b779c7507a2d179dbddd9bb0979467b","url":"assets/images/tutorial_hand.png"},{"revision":"1f595b4536690a11a733a73563c9974a","url":"assets/images/tutorial_hand.webp"},{"revision":"658f5531c9ebe5b76c50588fa7af3c67","url":"assets/images/WIN_screen_bg.webp"},{"revision":"cb57cbdf0504c38b0ac08890c13a8e8a","url":"assets/images/Winter_bg_01.webp"},{"revision":"fed8afe3c6d3b19c839d9c5211b93b3c","url":"assets/images/Winter_fence_v01.webp"},{"revision":"9aecfbcf79160ce6d50860feda240fdf","url":"assets/images/Winter_FG_v01.png"},{"revision":"7610e39767c77cc156fbaa8817a5423b","url":"assets/images/Winter_hill.webp"},{"revision":"9cb87e28c648d10bb283b5aa73a05ce8","url":"assets/images/Winter_sign_v01.webp"},{"revision":"ac5528830b1afee60312791fbe4d4987","url":"assets/rive/adultmonster.riv"},{"revision":"26d283bf45bf7163f82ae15984e45481","url":"assets/rive/eggmonster.riv"},{"revision":"de22bbf56a15ad53efc50d4526bdd393","url":"assets/rive/ftm_monster_evolve1-2.riv"},{"revision":"de75eb8c8d77ebbde4aa18729e56a4f0","url":"assets/rive/ftm_monster_evolve2-3.riv"},{"revision":"bf3d7a221523b3ef44d063334c1f95d8","url":"assets/rive/ftm_monster_evolve2-4.riv"},{"revision":"c451b14f9d638b42456ba25806de77a3","url":"assets/rive/ftm_monster_evolve3-4.riv"},{"revision":"fdaa1827fe0230cfe8e9c0f636ca19ae","url":"assets/rive/hatchedmonster.riv"},{"revision":"5abb3ef6468dffcb5780dbea6443396c","url":"assets/rive/jarprogression1_8.riv"},{"revision":"ed7ced36ec6a9c8833ef35255b3d3f6a","url":"assets/rive/phase1Monster.riv"},{"revision":"d2c9cbb13b6e5eaf4f5e1a5d0d070c3e","url":"assets/rive/phase2Monster.riv"},{"revision":"d02da42a0bf571ee1d93aed1858416c8","url":"assets/rive/phase4Monster.riv"},{"revision":"af65cbfff13f8031ee1563c2cb40b340","url":"assets/rive/rive.wasm"},{"revision":"659fae25da17253d141a4b00c1fa6755","url":"assets/rive/youngmonster.riv"},{"revision":"4bf1e87c117d3634b9876717bd0e5edc","url":"feedTheMonster.js"},{"revision":"709bf7749c21ff8ac7e45cfaeda2d697","url":"index.css"},{"revision":"b6b1612ab46bcc6edb25cc07d15576d8","url":"index.html"}], {
  ignoreURLParametersMatching: [/^cr_/],

});
var number = 0;
var version = 1.26;
// self.addEventListener('activate', function(e) {
//     console.log("activated");
//
// });

self.addEventListener("install", async function (e) {
  self.skipWaiting();
  e.waitUntil(preloadAdditionalAssets()); // Preload specific assets during the install event
});
const channel = new BroadcastChannel("my-channel");
self.addEventListener("activate", function (event) {
  event.waitUntil(self.clients.claim());
});
channel.addEventListener("message", async function (event) {
  if (event.data.command === "Cache") {
    number = 0;
    await getCacheName(event.data.data);
  }
  if (event.data.command === "CacheUpdate") {
    caches.delete(workbox.core.cacheNames.precache + event.data.data);
    await getCacheName(event.data.data);
  }
});

self.registration.addEventListener("updatefound", function (e) {
  caches.keys().then((cacheNames) => {
    cacheNames.forEach((cacheName) => {
      if (cacheName == workbox.core.cacheNames.precache) {
        // caches.delete(cacheName);
        self.clients.matchAll().then((clients) => {
          clients.forEach((client) =>
            client.postMessage({ msg: "Update Found" })
          );
        });
      }
    });
  });
});

// Preload additional assets
async function preloadAdditionalAssets() {
  const assetsToCache = [
    "/assets/rive/ftm_monster_evolve1-2.riv",
    "/assets/rive/ftm_monster_evolve2-3.riv",
    "/assets/rive/ftm_monster_evolve3-4.riv",
    "/assets/rive/eggmonster.riv",
    "/assets/rive/hatchedmonster.riv",
    "/assets/rive/youngmonster.riv",
    "/assets/rive/adultmonster.riv",
    "/assets/rive/rive.wasm",
  ];
  const cache = await caches.open("dynamic-cache");

  try {
    await Promise.all(
      assetsToCache.map(async (url) => {
        const response = await fetch(url);
        if (response.ok) {
          await cache.put(url, response.clone());
          console.log("Cached additional asset:", url);
        } else {
          console.error("Failed to fetch additional asset:", url);
        }
      })
    );
    console.log("All additional assets preloaded successfully.");
  } catch (error) {
    console.error("Error preloading additional assets:", error);
  }
}

async function cacheLangAssets(file, cacheName) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(file);

  if (!cachedResponse) {
    await cache.add(file);
    console.log('Cached File:', file);
  } else {
    console.log('File already cached, skipping:', file);
  }
}
async function getCacheName(language) {
  await caches.keys().then((cacheNames) => {
    cacheNames.forEach(async (cacheName) => {
      await getALLAudioUrls(cacheName, language);
    });
  });
}

async function getALLAudioUrls(cacheName, language) {
  let audioList = new Set(); // Use Set to filter duplicates
  let testURL = "https://globallit-aws-s3-static-webapp-test-us-east-2.s3.us-west-2.amazonaws.com/feed-the-monster";
  // let testURL = "http://127.0.0.1:5500";
  audioList.add(`/lang/${language}/ftm_${language}.json`);
  fetch(`./lang/${language}/ftm_${language}.json`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) =>
    res.json().then(async (data) => {
      await cacheFeedBackAudio(data.FeedbackAudios, language);

      for (const level of data.Levels) {
        for (const puzzle of level.Puzzles) {
          let file = puzzle.prompt.PromptAudio;

          audioList.add(
            self.location.href.includes("https://feedthemonsterdev.curiouscontent.org")
              ? file.slice(0, file.indexOf("/feedthemonster") + "/feedthemonster".length) +
              "dev" + file.slice(file.indexOf("/feedthemonster") + "/feedthemonster".length)
              : self.location.href.includes(testURL)
                ? file.replace("https://feedthemonster.curiouscontent.org", testURL)
                : file
          );
        }
      }
      if (self.location.href.includes(testURL)) {
        audioList.add(`${testURL}/lang/${language}/ftm_${language}.json`);
      }
      cacheAudiosFiles(Array.from(audioList), language); // Convert Set back to array
    })
  );
}

async function cacheAudiosFiles(audioList, language) {
  const uniqueAudioURLs = [...new Set(audioList)]; // Ensuring the audioList has only unique values
  const percentageInterval = 10;
  const partSize = Math.ceil(uniqueAudioURLs.length / percentageInterval);
  const delayBetweenRequests = 800;
  const timeoutMultiplier = 0.6; // Adjust multiplier based on device performance
  const timeoutValue = 3000; // Adjust timeout value as needed (in milliseconds)

  for (let i = 0; i < percentageInterval; i++) {
    const startIndex = i * partSize;
    let endIndex = startIndex + partSize;
    if (i == percentageInterval - 1) {
      endIndex = uniqueAudioURLs.length;
    }
    const part = uniqueAudioURLs.slice(startIndex, endIndex);

    try {
      const cache = await caches.open(language);
      const timeoutPromises = part.map(async (url) => {
        try {
          const timeoutPromise = new Promise((resolve, reject) => {
            const timeoutId = setTimeout(() => {
              clearTimeout(timeoutId);
              reject(new Error("Timeout while caching audio: " + url));
            }, timeoutValue * timeoutMultiplier);
          });
          console.log('Cached Audio files:', url);
          return Promise.race([timeoutPromise, cache.add(url)]);
        } catch (error) {
          console.error('Error caching audio:', url, error);
        }
      });

      await Promise.all(timeoutPromises);
    } catch (error) {
      console.error('Could not add audios:', error);
    } finally {
      await channel.postMessage({
        msg: "Loading",
        data: Math.min((i + 1) * percentageInterval, 100),
      });
    }

    await new Promise(resolve => setTimeout(resolve, delayBetweenRequests));
  }
}


async function cacheCommonAssets(language) {
  const assetUrls = [
    `./lang/${language}/audios/fantastic.WAV`,
    `./lang/${language}/audios/great.wav`,
    `./lang/${language}/images/fantastic_01.png`,
    `./lang/${language}/images/great_01.png`,
    `./lang/${language}/images/title.png`,
  ];

  const timeoutMultiplier = 1; // Adjust multiplier based on device performance
  const timeoutValue = 4000; // Adjust timeout value as needed (in milliseconds)

  try {
    const cacheName = language;
    const cache = await caches.open(cacheName);

    const timeoutPromises = assetUrls.map((url) => {
      return new Promise((resolve, reject) => {
        const timeoutId = setTimeout(() => {
          reject(new Error("Timeout while caching audio: " + url));
        }, timeoutValue * timeoutMultiplier);
        console.log('Cached Asset:', url);
        cache.add(url)
          .then(() => {
            clearTimeout(timeoutId);
            resolve();
          })
          .catch((error) => {
            clearTimeout(timeoutId);
            reject(error);
          });
      });
    });

    await Promise.all(timeoutPromises);
  } catch (e) {
    console.log('Could not open cache:', e);
  }
}

async function cacheFeedBackAudio(feedBackAudios, language) {
  let testURL = "globallit-aws-s3-static-webapp-test-us-east-2.s3.us-west-2.amazonaws.com";
  // let testURL = "127.0.0.1:5500"
  const audioUrls = [...new Set(feedBackAudios.map(audio => {
    if (self.location.href.includes("feedthemonsterdev")) {
      return audio.replace("/feedthemonster", "/feedthemonsterdev");
    } else if (self.location.href.includes(testURL)) {
      return audio.replace("https://feedthemonster.curiouscontent.org", "https://globallit-aws-s3-static-webapp-test-us-east-2.s3.us-west-2.amazonaws.com/feed-the-monster");
      // return audio.replace("https://feedthemonster.curiouscontent.org", "http://127.0.0.1:5500"); 
    } else {
      return audio;
    }
  }))];

  const timeoutMultiplier = 0.6; // Adjust multiplier based on device performance
  const timeoutValue = 3000; // Adjust timeout value as needed (in milliseconds)

  try {
    const cacheName = language;
    const cache = await caches.open(cacheName);

    await Promise.all(audioUrls.map(async (url) => {
      try {
        const timeoutPromise = new Promise((resolve, reject) => {
          const timeoutId = setTimeout(() => {
            clearTimeout(timeoutId);
            reject(new Error("Timeout while caching audio: " + url));
          }, timeoutValue * timeoutMultiplier);
        });

        await Promise.race([timeoutPromise, cache.add(url)]);
        console.log('Cached Feedback audio:', url);
      } catch (e) {
        console.log('Error caching audio:', url, e);
      }
    }));
  } catch (e) {
    console.log('Could not open cache:', e);
  }
}


self.addEventListener("fetch", function (event) {
  const requestUrl = new URL(event.request.url);

  if (requestUrl.searchParams.has("cache-bust")) {
    event.respondWith(fetch(event.request));
    return;
  }

  if (
    requestUrl.pathname.includes("/lang/") &&
    requestUrl.pathname.endsWith(".json")
  ) {
    event.respondWith(
      fetch(event.request).catch(() => {
        return new Response(
          "Language content unavailable offline",
          { status: 503 }
        );
      })
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      }

      return fetch(event.request).catch(function () {
        return new Response("Network unavailable in sw", { status: 503 });
      });
    })
  );
});
