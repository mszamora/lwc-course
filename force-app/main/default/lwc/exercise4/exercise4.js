import { LightningElement } from 'lwc';

export default class Exercise4 extends LightningElement {

    helloWorld = 'Hello World!!' + ' How are you?';

    get helloWorldModified(){
        return this.helloWorld.toLowerCase(); + ' How are you?';
    }

    set helloWorldModified(value){
        this.helloWorld = value;
    }

}