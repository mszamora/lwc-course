/* eslint-disable no-alert */
import { LightningElement } from "lwc";

export default class Exercise22Wrapper extends LightningElement {
  handlePropertiesSelected(event) {
    alert(
      "Selected properties: " +
        JSON.stringify(event.detail) +
        "Who fired the event?: " +
        event.target.localName
    );
  }
}