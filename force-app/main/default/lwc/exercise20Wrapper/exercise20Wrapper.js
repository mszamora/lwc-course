import { LightningElement } from 'lwc';

export default class Exercise20Wrapper extends LightningElement {
    error;
    stack;

    errorCallback(error, stack) {
        this.error = error;
        this.stack = stack;
    } 
}