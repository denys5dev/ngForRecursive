import { Injectable, ErrorHandler } from '@angular/core';

@Injectable()
export class CustomErrorHandlerService extends ErrorHandler {
    /**
     *
     */
    constructor() {
        super();
    }

    handleError(error: any) {
        let date = new Date();
        
        console.error('There was an error: ', {
            timestamp: date.toISOString(),
            message: error.message,
            zone: error.zone,
            task: error.task
        });
    }
}
