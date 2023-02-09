import { LightningElement } from 'lwc';

export default class Exercise21bWrapper extends LightningElement {
    renderedCallback() {
        const childElement = this.template.querySelector("c-exercise21b");
        childElement.addEventListener(
          "propertiesselected",
          this.handlePropertiesSelected
        );
      }
    
      handlePropertiesSelected(event) {
        alert(
          "Selected properties: " +
            JSON.stringify(event.detail) +
            "Who fired the event?: " +
            event.target.localName
        );
      }
}