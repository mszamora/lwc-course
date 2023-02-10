import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class Exercise33 extends LightningElement {
    handleClick(){
        const event = new ShowToastEvent({
            title: 'Exercise 33',
            message: 'This is a toast sample',
            variant: 'success',
        });
        
        this.dispatchEvent(event);

    }
}