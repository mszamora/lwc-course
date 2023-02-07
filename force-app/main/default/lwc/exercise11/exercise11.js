import { LightningElement,api } from 'lwc';

export default class Exercise11 extends LightningElement {
    privateItemName = 'Default item';

	@api
	get itemName() {
		return this.privateItemName;
	}

	set itemName(value) {
		this.privateItemName = value;
		this.setAttribute('item-name', this.privateItemName);
	}
}