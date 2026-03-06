package org.curiouslearning.swahili_english_nairobiMomTwo.core.subapp.handler;

import org.curiouslearning.swahili_english_nairobiMomTwo.core.subapp.payload.AppEventPayload;

public interface AppEventPayloadHandler {
    void handle(AppEventPayload payload);
}
