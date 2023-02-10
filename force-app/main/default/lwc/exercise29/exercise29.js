import { LightningElement, api, wire } from "lwc";
import { getRecord, getFieldValue } from "lightning/uiRecordApi";
import ACCOUNT_OBJECT from "@salesforce/schema/Account";
import NAME_FIELD from "@salesforce/schema/Account.Name";
import DESC_FIELD from "@salesforce/schema/Account.Description";

export default class Exercise29 extends LightningElement {
    
    @api recordId;
    accountObject = ACCOUNT_OBJECT;
  
    @wire(getRecord, {
      recordId: "$recordId",
      fields: [NAME_FIELD, DESC_FIELD]
    })
    record;
  
    get nameValue() {
      return this.record.data ? getFieldValue(this.record.data, NAME_FIELD) : "";
    }
  
    get descriptionValue() {
      return this.record.data ? getFieldValue(this.record.data, DESC_FIELD) : "";
    }

}