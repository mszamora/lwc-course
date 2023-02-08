import { LightningElement } from 'lwc';

export default class Exercise19c1 extends LightningElement {
    disconnectedCallback(){
        console.log('child1 disconnectedCallback') ;  
    }
}