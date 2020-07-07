import { Component, OnInit } from '@angular/core';
import * as SurveyCreator from "survey-creator";
import * as SurveySettings from "../../../core/survey/surevey-settings/survey-settings";

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.css']
})
export class BuildComponent implements OnInit {
  formId=1;
  surveyCreator: SurveyCreator.SurveyCreator;

  constructor() { }

  ngOnInit(): void {
    this.surveyCreator = new SurveyCreator.SurveyCreator("surveyCreatorContainer",SurveySettings.options);
    SurveySettings.applyCreatorGeneralSettings(this.surveyCreator);
    this.surveyCreator.text= localStorage.getItem("eformId_"+this.formId+"_");
    this.surveyCreator.saveSurveyFunc = this. saveEform;
  }

  saveEform = ()=>{
    console.log(this.surveyCreator.text);
    localStorage.setItem("eformId_1_", this.surveyCreator.text);
  }

}
