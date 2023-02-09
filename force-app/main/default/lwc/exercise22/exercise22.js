import { LightningElement } from "lwc";

export default class Exercise22 extends LightningElement {
  handleClick(event) {
    const propertiesSelectedEvent = new CustomEvent("propertiesselected", {
      detail: {
        bold: true,
        italics: false,
        color: "#fff"
      },
      bubbles: true,
      composed: true
    });

    event.target.dispatchEvent(propertiesSelectedEvent);
  }

  handlePropertiesSelected(event) {
    alert(
      "Selected properties on execise 21: " +
        JSON.stringify(event.detail) +
        "Who fired the event?: " +
        event.target.localName
    );
  }
}