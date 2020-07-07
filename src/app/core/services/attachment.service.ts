import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { ApiConstants } from '../constants/api.constants';

@Injectable({
  providedIn: 'root'
})
export class AttachmentService 
{
  
  constructor(private http: HttpClient) {}
  
  getEformAttachment(eformId, attachmentId , attachmentName){
    const params = new HttpParams()
        .set('attachmentName', attachmentName)
        .set('attachmentId', attachmentId);
    let url = ApiConstants.EFORMS_ATTACHMENTS.replace("{eformId}",eformId)+"/"+attachmentId;
    return this.http.get(url, {params});
  }

  deleteEformAttachment(eformId, attachmentId, attachmentName) {
    let url = ApiConstants.EFORMS_ATTACHMENTS.replace("{eformId}",eformId)+"/"+attachmentId;
    return this.http.delete(url);
  }

  uploadFileInfo(file: File) {
    const fileInfo = {
      filename: file.name,
      "content-type": file.type || "text",
      "byte-size": file.size
    };
    return this.http.post<any>(ApiConstants.FILES, fileInfo);
  }
 
  uploadFileToFileStore(fileObject: File, fileToken) {
    const formData: FormData = new FormData();
    formData.append('file',fileObject);
    return this.http.post(ApiConstants.UPLOAD, formData, {
      headers: new HttpHeaders({
        "X-File-Url-Token": fileToken,
        'Content-Type': 'toDelete'
      })
    });
  }

  
  addEformAttachment(attachmentName ,eformId, documentId) {
    let api = ApiConstants.EFORMS_ATTACHMENTS.replace("{eformId}",eformId);
    const attachment = {
      "document-id": documentId,
      "attachment-name":attachmentName
    };
    return this.http.post(api, JSON.stringify(attachment));
  }
}
