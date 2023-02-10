import { LightningElement,wire } from 'lwc';
import { getRecordCreateDefaults,generateRecordInputForCreate,createRecord} from 'lightning/uiRecordApi';
import ACCOUNT_OBJECT  from '@salesforce/schema/Account';

export default class Exercise28 extends LightningElement {


    @wire(getRecordCreateDefaults, { objectApiName: ACCOUNT_OBJECT })
    accountCreateDefaults;

    createAccount() {
        const accountName = this.template.querySelector("lightning-input").value;
        const accountObjectInfo = this.accountCreateDefaults.data.objectInfos[
          ACCOUNT_OBJECT.objectApiName
        ];
        const recordInput = generateRecordInputForCreate(
          this.accountCreateDefaults.data.record,
          accountObjectInfo
        );
        recordInput.fields.Name = accountName;
    
        createRecord(recordInput)
          .then((account) => {
            alert(`Account created: ${account.id}`);
          })
          .catch((error) => {
            alert(`Error creating account: ${error.body.message}`);
          });
      }
}