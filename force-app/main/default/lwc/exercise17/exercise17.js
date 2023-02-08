import { api, LightningElement } from 'lwc';

export default class Exercise17 extends LightningElement {
    @api
    showOranges(orangeNumber){
        // eslint-disable-next-line no-alert
        alert(`I have eaten ${orangeNumber} oranges`);
        return `I have eaten ${orangeNumber} oranges`;
    }
}