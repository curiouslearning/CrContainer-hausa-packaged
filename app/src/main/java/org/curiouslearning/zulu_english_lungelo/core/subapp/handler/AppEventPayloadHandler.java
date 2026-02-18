package org.curiouslearning.zulu_english_lungelo.core.subapp.handler;

import org.curiouslearning.zulu_english_lungelo.core.subapp.payload.AppEventPayload;

public interface AppEventPayloadHandler {
    void handle(AppEventPayload payload);
}
