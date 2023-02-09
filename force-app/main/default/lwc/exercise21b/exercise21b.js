import { LightningElement } from 'lwc';

export default class Exercise21b extends LightningElement {
    handleClick() {
        const propertiesSelectedEvent = new CustomEvent("propertiesselected", {
          detail: {
            bold: true,
            italics: false,
            color: "#fff"
          }
        });
    
        this.dispatchEvent(propertiesSelectedEvent);
      }
}