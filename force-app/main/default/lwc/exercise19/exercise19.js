import { LightningElement } from 'lwc';

import hasPrintButton from '@salesforce/customPermission/hasPrintButton';
import myCustomLabel from '@salesforce/label/c.myCustomLabel';
import lang from "@salesforce/i18n/lang";
import hasViewSetup from '@salesforce/userPermission/ViewSetup';
/* https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.create_get_permissions */

export default class Exercise19 extends LightningElement {
    myCustomLabel=myCustomLabel;
    hasPrinterEnabled=hasPrintButton;
    currentUserLanguage=lang;
    isSetupEnabled=hasViewSetup;
}