package org.curiouslearning.hausa_ucheNigeria.data.remote;

import com.google.gson.JsonElement;

import retrofit2.Call;
import retrofit2.http.GET;

public interface ApiService {

    @GET("web_app_manifest.json")
    Call<JsonElement> getWebApps();

}
