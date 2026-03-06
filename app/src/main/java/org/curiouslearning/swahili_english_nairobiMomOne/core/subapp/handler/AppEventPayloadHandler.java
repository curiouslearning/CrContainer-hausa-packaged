package org.curiouslearning.swahili_english_nairobiMomOne.core.subapp.handler;

import org.curiouslearning.swahili_english_nairobiMomOne.core.subapp.payload.AppEventPayload;

public interface AppEventPayloadHandler {
    void handle(AppEventPayload payload);
}
