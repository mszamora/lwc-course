import { LightningElement } from 'lwc';
import commonServices  from 'c/commonServices';

export default class Exercise13 extends LightningElement {

    handleClick(){
        commonServices.callApex(); 
    }
}