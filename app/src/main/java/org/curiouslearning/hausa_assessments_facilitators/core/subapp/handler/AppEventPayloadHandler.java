package org.curiouslearning.hausa_assessments_facilitators.core.subapp.handler;

import org.curiouslearning.hausa_assessments_facilitators.core.subapp.payload.AppEventPayload;

public interface AppEventPayloadHandler {
    void handle(AppEventPayload payload);
}
