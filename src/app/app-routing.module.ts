import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/authentications/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NoPageFoundComponent } from './pages/no-page-found/no-page-found.component';
import { MyRequestsComponent } from './pages/my-requests/my-requests.component';
import { MyFormsComponent } from './pages/my-forms/my-forms.component';
import { OtpComponent } from './pages/authentications/otp/otp.component';
import { EformsComponent } from './pages/eforms/eforms.component';
import { BuildComponent } from './pages/eforms/build/build.component';
import { LandingComponent } from './pages/eforms/landing/landing.component';
import { ThemeComponent } from './pages/eforms/theme/theme.component';
import { SettingsComponent } from './pages/eforms/settings/settings.component';
import { PreviewComponent } from './pages/eforms/preview/preview.component';
import { FormTranslationComponent } from './pages/eforms/form-translation/form-translation.component';


const routes: Routes = [
  {path:'', redirectTo:'/dashboard', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'otp', component:OtpComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'my-forms', component:MyFormsComponent},
  {path:'my-requests', component:MyRequestsComponent},
  {path:'eforms/:eformId', component:EformsComponent, children:[
        {path:'', redirectTo:'build', pathMatch:'prefix'},
        {path:'build', component:BuildComponent,  pathMatch:'prefix'},
        {path:'landing', component:LandingComponent,  pathMatch:'prefix'},
        {path:'theme', component:ThemeComponent,  pathMatch:'prefix'},
        {path:'settings', component:SettingsComponent,  pathMatch:'prefix'},
        {path:'preview', component:PreviewComponent,  pathMatch:'prefix'},
        {path:'translate', component:FormTranslationComponent,  pathMatch:'prefix'}
      ]
  },
  { path: '**', component: NoPageFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
