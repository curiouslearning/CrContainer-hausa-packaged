package org.curiouslearning.allSA_maharishi.core.subapp.handler;

import org.curiouslearning.allSA_maharishi.core.subapp.payload.AppEventPayload;

public interface AppEventPayloadHandler {
    void handle(AppEventPayload payload);
}
