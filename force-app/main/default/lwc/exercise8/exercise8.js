import { LightningElement } from 'lwc';

export default class Exercise8 extends LightningElement {
    helloworld = "Hello world!!";

    handleClick() {
        this.helloworld = "Whats your name?";
    }
}