import { environment } from "./../../../environments/environment";
import {CookieService} from "ngx-cookie-service";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders
} from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable, Inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import * as JsEncryptModule from 'jsencrypt';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor(
    private cookies: CookieService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const encrypt = new JsEncryptModule.JSEncrypt({ default_key_size: 2048 });
    encrypt.setPublicKey(environment.ENCRYPTION_PUBLIC_KEY);
    const headers:HttpHeaders = this.getRequestHeaders(encrypt, request);
    request = request.clone({headers: headers});
    return next.handle(request);
  }

  getRequestHeaders(encrypt, request){
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      "API-CLIENT": encrypt.encrypt(environment.API_CLIENT + ";" + new Date().toUTCString()),
      "API-DATE": new Date().toUTCString(),
      "Agent": "web",
      "Accept-Language": this.getCurrentLang(),
      Authorization: this.getAuthToken()
    });
    if(request.headers.get("x-file-url-token"))
     headers = headers.set('X-File-Url-Token', request.headers.get("x-file-url-token"))
    
    if(request.headers.get("content-type")){
      if(request.headers.get("content-type") == 'toDelete'){
        //delete content type while upload file
        headers = headers.delete('content-type');
      }
      else  
        headers = headers.set('Content-Type', request.headers.get("content-type"));
    }
    return headers; 
  }


  getCurrentLang(): string {
    if (isPlatformBrowser(this.platformId)) {
      return this.cookies.get("lang");
    }
  }

  getCurrentUserId() {
    if (isPlatformBrowser(this.platformId)) {
      return this.cookies.get("userId");
    }
  }

  getAuthToken() {
    if (isPlatformBrowser(this.platformId)) {
      if (isPlatformBrowser(this.platformId)) {
        const token = this.cookies.get("token");
        if (token.includes("Bearer")) {
          return token;
        } else {
          return "Bearer " + token;
        }
      }
    }
  }
}
