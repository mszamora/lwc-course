import { LightningElement } from 'lwc';

export default class Exercise21Wrapper extends LightningElement {
    handlePropertiesSelected(event) {
        alert(
          "Selected properties: " +
            JSON.stringify(event.detail) +
            "Who fired the event?: " +
            event.target.localName
        );
      }
}