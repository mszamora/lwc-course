import { LightningElement } from 'lwc';

export default class Exercise16 extends LightningElement {
    value1 = 'Test';
    value2 = 'Test 2';

    handleChange(event){
        this.value2 = event.target.value;
    }

    handleClick(){
        alert('value1 =' + this.value1+ '\nvalue2 =' + this.value2);
    }
}