import * as Survey from "survey-knockout";
import * as widgets from "surveyjs-widgets";
import {AddressComponent  as addressComponent} from "../survey-custome-components/address-component";
import {NumberComponent  as numberComponent} from "../survey-custome-components/number-component";
import {TextWithButtonWidget as textWithButton} from "./text-with-button-widget";
import {PhoneWidget as phone} from "./phone-widget";

export function doImportWidgets(){
    //import ready made widgets
    widgets.jquerybarrating(Survey);
   
    //import custom widget
    textWithButton(Survey);
    phone(Survey);
    //searchString(Survey);

    //import components
    addressComponent(Survey);
    numberComponent(Survey);
} 
