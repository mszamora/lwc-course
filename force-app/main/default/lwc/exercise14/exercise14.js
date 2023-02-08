import { LightningElement } from 'lwc';

export default class Exercise14 extends LightningElement {
    emojis='';
    constructor(){
        super();
        fetch('https://api.github.com/emojis')
        .then(response => response.json())
        .then(data => {
            this.emojis = JSON.stringify(data,null,2);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
}