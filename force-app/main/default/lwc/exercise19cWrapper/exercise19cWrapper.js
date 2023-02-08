import { LightningElement } from 'lwc';

export default class Exercise19cWrapper extends LightningElement {
    showChild = true;

    handleClick() {
        this.showChild = !this.showChild;
    }
    
}