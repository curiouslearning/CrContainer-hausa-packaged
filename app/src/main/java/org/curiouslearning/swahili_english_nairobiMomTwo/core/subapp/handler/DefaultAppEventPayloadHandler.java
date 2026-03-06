package org.curiouslearning.swahili_english_nairobiMomTwo.core.subapp.handler;

import android.util.Log;

import org.curiouslearning.swahili_english_nairobiMomTwo.core.subapp.payload.AppEventPayload;

public class DefaultAppEventPayloadHandler
        implements AppEventPayloadHandler {

    private static final String TAG = "AppEventHandler";

    @Override
    public void handle(AppEventPayload payload) {

        Log.d(TAG,
                "Accepted payload | app_id=" + payload.app_id +
                        " collection=" + payload.collection +
                        " timestamp=" + payload.timestamp
        );
    }
}
