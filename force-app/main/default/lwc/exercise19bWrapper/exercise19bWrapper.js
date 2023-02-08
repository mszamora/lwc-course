import { LightningElement } from 'lwc';

export default class Exercise19bWrapper extends LightningElement {
    connectedCallback(){
      console.log('parent connectedCallback') ; 
      
      const foundElements = [];
      this.template.querySelectorAll('*').forEach(element => {
                foundElements.push(element.localName);
      });
      console.log('querySelectorAll-->' +foundElements);
    }
    
    renderedCallback(){
        console.log('parent renderedCallback') ;  
        const foundElements = [];
        this.template.querySelectorAll('*').forEach(element => {
                  foundElements.push(element.localName);
        });
        console.log('querySelectorAll-->' +foundElements);
    }
}