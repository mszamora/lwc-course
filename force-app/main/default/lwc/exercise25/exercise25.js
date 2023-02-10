import { LightningElement,wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import CONTACT_OBJECT from '@salesforce/schema/Contact';


export default class Exercise25 extends LightningElement {

    objectName = ACCOUNT_OBJECT;

    @wire(getObjectInfo, { objectApiName: '$objectName' })
    objectInfo;

    get objectInfoSerialized(){
        return JSON.stringify(this.objectInfo.data,null,2);
    }

    get errorSerialized(){
        return JSON.stringify(this.objectInfo.error,null,2); 
    }

    handleClick(){
        if (this.objectName == ACCOUNT_OBJECT){
            this.objectName = CONTACT_OBJECT;
        }else{
            this.objectName = ACCOUNT_OBJECT;
        }
    }

    handleErrorClick(){
        this.objectName ="OBJETOERROR";
    }

}