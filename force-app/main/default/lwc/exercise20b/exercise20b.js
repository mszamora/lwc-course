import { LightningElement,api } from 'lwc';
import tmpl1 from './exercise20b-1.html';
import tmpl2 from './exercise20b-2.html';

export default class Exercise20b extends LightningElement {
    @api showTemplate1;

    render(){
        if (this.showTemplate1){
            return tmpl1
        }else{
            return tmpl2;
        }
    }
}