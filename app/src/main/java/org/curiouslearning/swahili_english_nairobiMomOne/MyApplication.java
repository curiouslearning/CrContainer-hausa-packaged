package org.curiouslearning.swahili_english_nairobiMomOne;

import android.app.Application;
import androidx.startup.AppInitializer;
import app.rive.runtime.kotlin.RiveInitializer;



public class MyApplication extends Application {
    @Override
    public void onCreate() {
        super.onCreate();

        // FacebookSdk.sdkInitialize(getApplicationContext());
        // FacebookSdk.setAutoInitEnabled(true);
        // FacebookSdk.fullyInitialize();
        // FacebookSdk.setAdvertiserIDCollectionEnabled(true);

        AppInitializer.getInstance(this)
                .initializeComponent(RiveInitializer.class);

    }
}
