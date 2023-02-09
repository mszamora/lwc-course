import { LightningElement, wire } from "lwc";
import {
  MessageContext,
  subscribe,
  unsubscribe,
  APPLICATION_SCOPE
} from "lightning/messageService";

import SAMPLEMC from "@salesforce/messageChannel/courseMessageChannel__c";

export default class Exercise22subscriber extends LightningElement {
  @wire(MessageContext)
  messageContext;

  subscription = null;
  receivedMessage = "";

  subscribeMC() {
    if (!this.subscription) {
      this.subscription = subscribe(
        this.messageContext,
        SAMPLEMC,
        (message) => {
          this.handleMessage(message);
        },
        { scope: APPLICATION_SCOPE }
      );
    }
  }

  unsubscribeMC() {
    unsubscribe(this.subscription);
    this.subscription = null;
  }

  handleMessage(message) {
    this.receivedMessage = message
      ? JSON.stringify(message, null, "")
      : "no message payload";
  }

  handleSubscribe() {
    this.subscribeMC();
  }

  handleUnsubscribe() {
    this.unsubscribeMC();
  }
}