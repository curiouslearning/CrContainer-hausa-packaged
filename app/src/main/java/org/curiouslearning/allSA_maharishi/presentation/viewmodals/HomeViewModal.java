package org.curiouslearning.allSA_maharishi.presentation.viewmodals;

import android.app.Application;

import androidx.annotation.NonNull;
import androidx.lifecycle.AndroidViewModel;
import androidx.lifecycle.LifecycleOwner;
import androidx.lifecycle.LiveData;

import org.curiouslearning.allSA_maharishi.data.model.WebApp;
import org.curiouslearning.allSA_maharishi.data.respository.WebAppRepository;

import java.util.List;

public class HomeViewModal extends AndroidViewModel {

    private WebAppRepository webAppRepository;
    private Application application;
    private LifecycleOwner lifecycleOwner;

    public HomeViewModal(@NonNull Application application, LifecycleOwner lifecycleOwner) {
        super(application);
        this.application = application;
        this.lifecycleOwner = lifecycleOwner;
        webAppRepository = new WebAppRepository(application);
    }

    public LiveData<List<WebApp>> getSelectedlanguageWebApps(String selectedLanguage) {
        return webAppRepository.getSelectedlanguageWebApps(selectedLanguage, lifecycleOwner);
    }
    public LiveData<List<String>> getAllLanguagesInEnglish() {
        return webAppRepository.getAllLanguagesInEnglish();
    }

    public LiveData<List<WebApp>> getAllWebApps() {
        return webAppRepository.getAllWebApps(lifecycleOwner);
    }


}
