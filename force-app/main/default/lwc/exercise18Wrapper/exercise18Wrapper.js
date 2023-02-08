import { LightningElement } from 'lwc';

export default class Exercise18Wrapper extends LightningElement {

    handleClick(){
        const foundElements = [];
        this.template.querySelectorAll('*').forEach(element => {
                   foundElements.push(element.localName);
        });
        alert(foundElements);   
    }
}