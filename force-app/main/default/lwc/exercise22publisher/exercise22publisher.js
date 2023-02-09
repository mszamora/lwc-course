import { LightningElement,wire } from "lwc";
import {
  MessageContext,
  publish
} from "lightning/messageService";
import SAMPLEMC from "@salesforce/messageChannel/courseMessageChannel__c";

export default class Exercise22publisher extends LightningElement {
  messageSend;

  @wire(MessageContext)
  messageContext;

  publishMC() {
    const message = { message: this.messageSend };
    publish(this.messageContext, SAMPLEMC, message);
  }

  handleChange(event) {
    this.messageSend = event.target.value;
  }

  handleClick() {
    this.publishMC();
  }
}