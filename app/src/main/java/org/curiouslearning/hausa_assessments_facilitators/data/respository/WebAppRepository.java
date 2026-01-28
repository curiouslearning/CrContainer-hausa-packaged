package org.curiouslearning.hausa_assessments_facilitators.data.respository;

import android.app.Application;

import androidx.lifecycle.LifecycleOwner;
import androidx.lifecycle.LiveData;
import androidx.lifecycle.MutableLiveData;
import androidx.lifecycle.Observer;

import org.curiouslearning.hausa_assessments_facilitators.data.database.WebAppDatabase;
import org.curiouslearning.hausa_assessments_facilitators.data.model.WebApp;
import org.curiouslearning.hausa_assessments_facilitators.data.local.ManifestLoader;
import org.curiouslearning.hausa_assessments_facilitators.data.remote.RetrofitInstance;
import org.curiouslearning.hausa_assessments_facilitators.utilities.ConnectionUtils;

import java.util.Collections;
import java.util.List;

public class WebAppRepository {

    private WebAppDatabase webAppDatabase;
    private RetrofitInstance retrofitInstance;
    private LiveData<List<WebApp>> webApp;
    private Application application;

    private boolean isFetching = false;

    public WebAppRepository(Application application) {
        this.application = application;
        retrofitInstance = RetrofitInstance.getInstance();
        webAppDatabase = new WebAppDatabase(application);
    }

    public void fetchWebApp() {
        ManifestLoader.getInstance().loadLocalManifest(application.getApplicationContext(), webAppDatabase);
//        if (isFetching) {
//            return;
//        }
//        if (ConnectionUtils.getInstance().isInternetConnected(application)) {
//            isFetching = true;
//            retrofitInstance.fetchAndCacheWebApps(webAppDatabase, new RetrofitInstance.FetchCallback() {
//                @Override
//                public void onComplete() {
//                    isFetching = false;
//                }
//            });
//        }
    }

    public LiveData<List<WebApp>> getSelectedlanguageWebApps(String selectedLanguage, LifecycleOwner lifecycleOwner) {
        MutableLiveData<List<WebApp>> selectedLanguageWebApps = new MutableLiveData<>();
        webApp = webAppDatabase.getSelectedlanguageWebApps(selectedLanguage);
        webApp.observe(lifecycleOwner, new Observer<List<WebApp>>() {
            @Override
            public void onChanged(List<WebApp> webApps) {
                if (webApps != null && !webApps.isEmpty()) {
                    selectedLanguageWebApps.setValue(webApps);
                } else {
                    selectedLanguageWebApps.setValue(Collections.emptyList());
//                   fetchWebApp();
                }
            }
        });
        return selectedLanguageWebApps;
    }

    public LiveData<List<WebApp>> getAllWebApps(LifecycleOwner lifecycleOwner) {
        MutableLiveData<List<WebApp>> newWebApps = new MutableLiveData<>();
        webApp = webAppDatabase.getAllWebApps();
        webApp.observe(lifecycleOwner, new Observer<List<WebApp>>() {
            @Override
            public void onChanged(List<WebApp> webApps) {
                if (webApps != null && !webApps.isEmpty()) {
                    newWebApps.setValue(webApps);
                } else {
                    newWebApps.setValue(Collections.emptyList());
                    fetchWebApp();
                }
            }
        });
        return newWebApps;
    }
    public LiveData<List<String>> getAllLanguagesInEnglish() {
        return webAppDatabase.getAllLanguagesInEnglish();
    }

    public void getUpdatedAppManifest(String manifestVersion) {
        if (ConnectionUtils.getInstance().isInternetConnected(application)) {
            retrofitInstance.getUpdatedAppManifest(webAppDatabase, manifestVersion);
        }
    }
}
