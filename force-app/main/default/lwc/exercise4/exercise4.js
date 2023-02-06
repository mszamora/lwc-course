import { LightningElement } from 'lwc';

export default class Exercise4 extends LightningElement {

    helloWorld = 'Hello World!!';

    get helloWorldModified(){
        return this.helloWorld + ' How are you?';
    }
}