import { LightningElement, wire } from "lwc";
import getAccounts from "@salesforce/apex/Exercise27Controller.getAccounts";

export default class Exercise27 extends LightningElement {
  @wire(getAccounts, { accountSource: "Web" })
  accounts;
}