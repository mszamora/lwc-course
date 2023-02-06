import { LightningElement } from "lwc";

export default class Exercise5 extends LightningElement {
    showError = {};

    handleClick() {
        this.showError = !this.showError;
    }
}