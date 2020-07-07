import { Component, OnInit, Input } from '@angular/core';
import * as Survey from "survey-angular";
import { ApiConstants } from 'src/app/core/constants/api.constants';
import { AttachmentService } from 'src/app/core/services/attachment.service';

Survey.Serializer.addProperty("page", {
  name: "backgroundColor:text",
  category: "general"
});

@Component({
  selector: 'survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  surveyModel:Survey.Model;
  @Input() json:object;
  eformId:number=1;
  constructor(private attachmentService: AttachmentService) { }

  ngOnInit(): void { 
    this.surveyModel = new Survey.Model(this.json);
    this.surveyModel.onUpdatePageCssClasses.add(this.onUpdatePageCssClasses);
    this.surveyModel.onUploadFiles.add(this.onUploadFiles);
    this.surveyModel.onDownloadFile.add(this.onDownloadFile);
    this.surveyModel.onClearFiles.add(this.onClearFiles);
    Survey.SurveyNG.render("surveyElement", { model: this.surveyModel });
  }

  onUpdatePageCssClasses = (survey, option)=>{
    //options.cssClasses.page.root = 'page-bg-'+options.page.backgroundColor+' '+options.cssClasses.page.root ;
    //ptions.cssClasses.page.root = 'page-bg-'+options.page.backgroundColor;
  }

  changeMode(mode){
    this.surveyModel.mode=mode;
  }

  translate(lang){
    // console.log(lang);
    this.surveyModel.locale=lang;
   // Survey.SurveyNG.render("surveyElement", { model: this.surveyModel });
  }

  saveDraft(){
    console.log(this.surveyModel.data);
  }
  save(){
    console.log(this.surveyModel.hasErrors());
    console.log(this.surveyModel.data);
  }

  onClearFiles = (sender, option) =>{
    const q = sender.getQuestionByName(option.name);
    if(q.value && q.value[0] && q.value[0].content){
      const attachmentObj = q.value[0].content;
      this.attachmentService.deleteEformAttachment(this.eformId, attachmentObj.id , q.name).subscribe(res=>{
        option.callback("success");
      });
    }
    else
      option.callback("success");
   
  }

  onDownloadFile = (sender, question) =>{
    console.log("on download file triggered");
    console.log(question);
    console.log(question.content.id+" - "+question.content['attachment-name']);
    this.attachmentService.getEformAttachment(this.eformId , question.content.id, question.content['attachment-name']).subscribe(attachment=>{
      console.log(attachment);
      question.callback("success",ApiConstants.DOWNLOAD+"?file="+attachment['data']['document']['file-token']);
    });

  }

  onUploadFiles = (sender, question) =>{
    console.log(question.name);
    this.attachmentService.uploadFileInfo(question.files[0]).subscribe(document=>{
      this.attachmentService.uploadFileToFileStore(question.files[0], document.data.headers['file-token']).subscribe(res=>{
        this.attachmentService.addEformAttachment(question.name,this.eformId,document.data.id).subscribe(attachment=>{
          console.log(attachment);
          question.callback("success",[
            {
              file:question.files[0],
              content:attachment['data']
            }
          ]);
        })
      })
    })
  }






}
