import { Component, OnInit } from '@angular/core';
import * as WidgetImporter from "../../core/survey/survey-custom-widgets/widget-importer";
import * as SurveySettings from "../../core/survey/surevey-settings/survey-settings";

WidgetImporter.doImportWidgets();
SurveySettings.applySettings();

@Component({
  selector: 'app-eforms',
  templateUrl: './eforms.component.html',
  styleUrls: ['./eforms.component.css']
})
export class EformsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}
