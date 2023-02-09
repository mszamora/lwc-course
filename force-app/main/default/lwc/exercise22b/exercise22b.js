import { LightningElement } from "lwc";

export default class Exercise22b extends LightningElement {
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

  stopPropagation(event) {
    alert("Parando el evento");
    event.stopPropagation();
  }
}