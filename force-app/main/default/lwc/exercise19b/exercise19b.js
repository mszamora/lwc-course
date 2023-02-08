import { LightningElement } from 'lwc';

export default class Exercise19b extends LightningElement {
    connectedCallback(){
        console.log('child connectedCallback') ; 
        const foundElements = [];
        this.template.querySelectorAll('*').forEach(element => {
                foundElements.push(element.localName);
        });
        console.log('querySelectorAll-->' +foundElements);
    }

    renderedCallback(){
        console.log('child renderedCallback') ; 
        const foundElements = [];
        this.template.querySelectorAll('*').forEach(element => {
                foundElements.push(element.localName);
        });
        console.log('querySelectorAll-->' +foundElements);
    }
}