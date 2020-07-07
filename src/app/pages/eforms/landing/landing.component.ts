import { Component, OnInit } from '@angular/core';
import * as Survey from "survey-knockout";
import * as SurveyCreator from "survey-creator";
import * as SurveySettings from "../../../core/survey/surevey-settings/survey-settings";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  formId: number = 1;
  surveyCreator: SurveyCreator.SurveyCreator;

  constructor() { }

  ngOnInit(): void {
    console.log(Survey);
    this.surveyCreator = new SurveyCreator.SurveyCreator("surveyCreatorContainer",SurveySettings.landingOptions);
    SurveySettings.applyCreatorLandingPageSettings(this.surveyCreator);
    this.surveyCreator.text= localStorage.getItem("eformId_"+this.formId+"_landing");
    this.surveyCreator.saveSurveyFunc = this. saveLanding
  }

  saveLanding = ()=>{
    console.log(this.surveyCreator.text);
    localStorage.setItem("eformId_1_landing", this.surveyCreator.text);
  }

}
