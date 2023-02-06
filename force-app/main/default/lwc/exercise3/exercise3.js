import { LightningElement } from 'lwc';

export default class Exercise3 extends LightningElement {

    helloworld = 'Hello World';

    handleClick(event){
        event.target.setAttribute("hidden", "false");
    }
}