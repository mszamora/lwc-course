import { LightningElement } from 'lwc';

export default class Exercise18 extends LightningElement {
    showTemplateContent() {
        const foundElements = [];
        this.template.querySelectorAll("*").forEach((element) => {
          foundElements.push(element.localName);
        });
        alert(foundElements);
      }
    
      showSlotsContent() {
        const foundElements = [];
        this.querySelectorAll("*").forEach((element) => {
          foundElements.push(element.localName);
        });
        alert(foundElements);
      }

}