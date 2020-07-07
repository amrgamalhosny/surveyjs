import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {CheckboxModule} from 'primeng/checkbox';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyRequestsComponent } from './pages/my-requests/my-requests.component';
import { OtpComponent } from './pages/authentications/otp/otp.component';
import { LoginComponent } from './pages/authentications/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { MyFormsComponent } from './pages/my-forms/my-forms.component';
import { NoPageFoundComponent } from './pages/no-page-found/no-page-found.component';
import { SurveyComponent} from './components/survey/survey.component';
import { BuildComponent } from './pages/eforms/build/build.component';
import { LandingComponent } from './pages/eforms/landing/landing.component';
import { SettingsComponent } from './pages/eforms/settings/settings.component';
import { ThemeComponent } from './pages/eforms/theme/theme.component';
import { EformsComponent } from './pages/eforms/eforms.component';
import { PreviewComponent } from './pages/eforms/preview/preview.component';
import { FormTranslationComponent } from './pages/eforms/form-translation/form-translation.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from './core/interceptors/header.interceptor';




@NgModule({
  declarations: [
    AppComponent,
    MyRequestsComponent,
    OtpComponent,
    LoginComponent,
    DashboardComponent,
    MyFormsComponent,
    NoPageFoundComponent,
    SurveyComponent,
    EformsComponent,
    BuildComponent,
    LandingComponent,
    SettingsComponent,
    ThemeComponent,
    PreviewComponent,
    FormTranslationComponent
  ],
  imports: [
    BrowserAnimationsModule,FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,CheckboxModule
    
  
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
