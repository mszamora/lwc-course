import { LightningElement } from 'lwc';
import {callApex } from './utils.js';

export default class Exercise12 extends LightningElement {

     // eslint-disable-next-line no-useless-constructor
    constructor(){
        super();
        // Do whatever
        callApex();
    }
}