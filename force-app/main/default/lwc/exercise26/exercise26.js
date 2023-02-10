import { LightningElement,wire,track } from 'lwc';
import { getObjectInfo, getPicklistValues } from "lightning/uiObjectInfoApi";
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import CONTACT_OBJECT from '@salesforce/schema/Lead';
import ACCOUNT_SOURCE from '@salesforce/schema/Account.AccountSource';
import LEAD_SOURCE from '@salesforce/schema/Contact.LeadSource';

export default class Exercise26 extends LightningElement {
    fieldPicklistValues;
    objectField = ACCOUNT_SOURCE;
    objectName = ACCOUNT_OBJECT;
    error;
  
    @wire(getObjectInfo, { objectApiName: "$objectName" })
    objectInfo;
  
    @wire(getPicklistValues, {
      recordTypeId: "$objectInfo.data.defaultRecordTypeId",
      fieldApiName: "$objectField"
    })
    setPicklistValues({ error, data }) {
      this.fieldPicklistValues = JSON.stringify(data, null, 2);
      this.error = error;
      console.log('Error-->'+JSON.stringify(error));
      console.log('Data-->'+JSON.stringify(data));
    }

    handleClick() {
        if (this.objectName === ACCOUNT_OBJECT) {
          this.objectName = CONTACT_OBJECT;
          this.objectField = LEAD_SOURCE;
        } else {
          this.objectName = ACCOUNT_OBJECT;
          this.objectField = ACCOUNT_SOURCE;
        }
      }

    handleErrorClick(){
      this.objectName = "ERROROBJETO";
      this.objectField ="FIELDERROR";
    }
}