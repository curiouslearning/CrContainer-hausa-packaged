package org.curiouslearning.swahili_english_nairobiMomThree.core.subapp.handler;

import org.curiouslearning.swahili_english_nairobiMomThree.core.subapp.payload.AppEventPayload;

public interface AppEventPayloadHandler {
    void handle(AppEventPayload payload);
}
