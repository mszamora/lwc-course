import { LightningElement } from 'lwc';

export default class Exercise19c2 extends LightningElement {
    disconnectedCallback(){
        console.log('child2 disconnectedCallback') ;  
    }

}