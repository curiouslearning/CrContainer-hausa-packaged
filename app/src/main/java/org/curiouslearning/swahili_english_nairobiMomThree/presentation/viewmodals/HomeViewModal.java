package org.curiouslearning.swahili_english_nairobiMomThree.presentation.viewmodals;

import android.app.Application;

import androidx.annotation.NonNull;
import androidx.lifecycle.AndroidViewModel;
import androidx.lifecycle.LifecycleOwner;
import androidx.lifecycle.LiveData;

import org.curiouslearning.swahili_english_nairobiMomThree.data.model.WebApp;
import org.curiouslearning.swahili_english_nairobiMomThree.data.respository.WebAppRepository;

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
