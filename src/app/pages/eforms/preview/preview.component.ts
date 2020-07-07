import { Component, OnInit } from '@angular/core';
// import * as Survey from "survey-angular";

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  formId:number=1;
  hasLanding:boolean = true;
  json:any;
  constructor() { }

  ngOnInit(): void {
    const landing = localStorage.getItem("eformId_"+this.formId+"_landing");
    //console.log(landing);
    const lo = JSON.parse(landing);
    lo.pages[0].name="landing1";
    //console.log(lo.pages[0]);



    const eform = localStorage.getItem("eformId_"+this.formId+"_");
    const o = JSON.parse(eform);
    //console.log(o.pages[0]);
    o.pages.unshift(lo.pages[0]);

    this.json = o;
  }

}
