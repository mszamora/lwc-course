import { LightningElement } from 'lwc';
import getAccountsImperative from '@salesforce/apex/Exercise27Controller.getAccountsImperative';

export default class Exercise30 extends LightningElement {

    accounts;
    error;

    constructor(){
        super();

        getAccountsImperative({ accountSource:"Web" })
        .then(result =>  {
            this.accounts = result;
        })
        .catch(error => {
            this.error = error;
        })

    }
}