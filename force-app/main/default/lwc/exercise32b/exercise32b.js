import { LightningElement, wire, track } from "lwc";
import { CurrentPageReference } from "lightning/navigation";
import { NavigationMixin } from "lightning/navigation";

export default class Exercise32b extends NavigationMixin(LightningElement) {
  @track showPanel;

  @wire(CurrentPageReference)
  currentPageReference;

  connectedCallback() {
    this.showPanel = this.currentPageReference.state.c__showPanel;
  }

  handleClick() {
    console.log("currentPageReference-->"+JSON.stringify(this.currentPageReference));

    this.showPanel = !this.showPanel;
    const showPanelInUrl = this.showPanel ? true : undefined;

    //Using object.assign
    const newPageReference = Object.assign({},this.currentPageReference, {
      state: Object.assign({}, this.currentPageReference.state, {
        c__showPanel: showPanelInUrl
      })
    });

    console.log("newPageReference-->"+JSON.stringify(newPageReference));

    //Using spread
    const newPageReference2 = {
        ...this.currentPageReference,
        state: {
            ...this.currentPageReference.state, 
            c__showPanel: showPanelInUrl
        }
    }

    console.log("newPageReference2-->"+JSON.stringify(newPageReference2));

    this[NavigationMixin.Navigate](newPageReference);
  }
}