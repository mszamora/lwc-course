/* eslint-disable no-alert */
import { LightningElement } from "lwc";
import exercise7bcss from "@salesforce/resourceUrl/exercise7bcss";
import { loadStyle } from "lightning/platformResourceLoader";

export default class Exercise7b extends LightningElement {
    renderedCallback() {
        loadStyle(this, exercise7bcss)
        .then(() => {
            alert("Library has been loaded");
        })
        // eslint-disable-next-line no-unused-vars
        .catch((error) => {
            alert("An error occurred");
        });
    }
}