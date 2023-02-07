import { LightningElement, api} from 'lwc';

export default class Exercise10 extends LightningElement {
    itemNameUpperCase;
	itemNameInternal;

	@api 
	get itemName() {
		return this.itemNameInternal;
	}

	set itemName(value) {
		this.itemNameInternal = value;
		this.itemNameUpperCase = value.toUpperCase();
	}
}