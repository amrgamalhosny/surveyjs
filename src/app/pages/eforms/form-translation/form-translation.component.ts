import { Component, OnInit } from '@angular/core';
import * as SurveyCreator from "survey-creator";
import * as SurveySettings from "../../../core/survey/surevey-settings/survey-settings";
import * as $ from 'jquery';

@Component({
  selector: 'app-form-translation',
  templateUrl: './form-translation.component.html',
  styleUrls: ['./form-translation.component.css']
})
export class FormTranslationComponent implements OnInit {

  constructor() { }

  formId: number = 1;
  surveyCreator: SurveyCreator.SurveyCreator;

  ngOnInit(): void {
    this.surveyCreator = new SurveyCreator.SurveyCreator("surveyCreatorContainer",SurveySettings.treanslationOptions);
    this.surveyCreator.text= localStorage.getItem("eformId_"+this.formId+"_");
    this.surveyCreator.showTranslationEditor();
    $(".editor-tabs").hide();
  }

  save(){
    localStorage.setItem("eformId_1_", this.surveyCreator.text);
  }
}
