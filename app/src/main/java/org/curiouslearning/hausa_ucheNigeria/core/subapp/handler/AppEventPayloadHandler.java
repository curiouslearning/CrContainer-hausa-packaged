package org.curiouslearning.hausa_ucheNigeria.core.subapp.handler;

import org.curiouslearning.hausa_ucheNigeria.core.subapp.payload.AppEventPayload;

public interface AppEventPayloadHandler {
    void handle(AppEventPayload payload);
}
