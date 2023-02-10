import { api, LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';

export default class Exercise23 extends LightningElement {
    @api recordId;

    accountObject = ACCOUNT_OBJECT;

}