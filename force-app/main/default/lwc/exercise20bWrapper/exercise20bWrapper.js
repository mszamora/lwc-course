import EmailPreferencesStayInTouchReminder from '@salesforce/schema/User.EmailPreferencesStayInTouchReminder';
import { LightningElement } from 'lwc';

export default class Exercise20bWrapper extends LightningElement {
    showTemplate1=true;
    handleClick(){
        this.showTemplate1 = !this.showTemplate1;
    }
}