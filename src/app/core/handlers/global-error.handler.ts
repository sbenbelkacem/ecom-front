import {ErrorHandler} from '@angular/core';

/**
 * global error handler implements ErrorHandler interface,
 * this class is responsible to handle uncaught errors
 */
export class GlobalErrorHandler implements ErrorHandler {
    handleError(error: any): void {
        console.error('ECOM Error', error);
        throw error;
    }

}
