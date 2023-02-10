import { LightningElement } from "lwc";
import ACCOUNT_OBJECT from "@salesforce/schema/Account";
import ACCOUNT_NAME_FIELD from "@salesforce/schema/Account.Name";

export default class Exercise24 extends LightningElement {
  accountObject = ACCOUNT_OBJECT;
  accountNameField = ACCOUNT_NAME_FIELD;

  handleSuccess(event) {
    alert(`Account with id ${event.detail.id} has been created`);
  }
}