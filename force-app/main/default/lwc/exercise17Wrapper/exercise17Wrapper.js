import { LightningElement } from 'lwc';

export default class Exercise17Wrapper extends LightningElement {

    oranges = 0;
    orangeMessage;

    handleChange(event){
        this.oranges = event.target.value;
    }

    handleClick(){
        this.orangeMessage = this.template.querySelector('c-exercise17').showOranges(this.oranges);
    }

}