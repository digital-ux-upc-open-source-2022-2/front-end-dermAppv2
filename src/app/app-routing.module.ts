import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ViewComponent} from "./public/pages/view/view.component";
import {HomeComponent} from "./public/pages/home/home.component";
import {AboutComponent} from "./public/pages/about/about.component";
import {LoginFormComponent} from "./public/security/login-form/login-form.component";
import {LoginFormDermatologistComponent} from "./public/security/login-form-dermatologist/login-form-dermatologist.component";
import {LoginFormPatientComponent} from "./public/security/login-form-patient/login-form-patient.component";
import {ViewPatientComponent} from "./diagnostic/pages/patient/view-patient/view-patient.component";
import {MyDoctorPatientComponent} from "./diagnostic/pages/patient/my-doctor-patient/my-doctor-patient.component";
import {RemindersPatientComponent} from "./diagnostic/pages/patient/reminders-patient/reminders-patient.component";
import {ProfilePatientComponent} from "./profiles/patient/profile-patient/profile-patient.component";
import {EditProfilePatientComponent} from "./profiles/patient/edit-profile-patient/edit-profile-patient.component";
import {MyFilesPatientComponent} from "./diagnostic/pages/patient/my-files-patient/my-files-patient.component";
import {MessagesPatientComponent} from "./diagnostic/pages/patient/messages-patient/messages-patient.component";
import {HomePatientComponent} from "./diagnostic/pages/patient/home-patient/home-patient.component";
import {TypeOfUserComponent} from "./public/security/type-of-user/type-of-user.component";
import {
  ViewDermatologistComponent
} from "./diagnostic/pages/dermatologist/view-dermatologist/view-dermatologist.component";
import {
  ChatDermatologistComponent
} from "./diagnostic/pages/dermatologist/chat-dermatologist/chat-dermatologist.component";
import {
  AnalyticsDermatologistComponent
} from "./diagnostic/pages/dermatologist/analytics-dermatologist/analytics-dermatologist.component";
import {ListPatientsComponent} from "./history/list-patients/list-patients.component";
import {
  ProfileDermatologistComponent
} from "./profiles/dermatologist/profile-dermatologist/profile-dermatologist.component";
import {
  EditProfileDermatologistComponent
} from "./profiles/dermatologist/edit-profile-dermatologist/edit-profile-dermatologist.component";
import {InfoPatientSpecificComponent} from "./history/info-patient-specific/info-patient-specific.component";
import {
  ScheduleDermatologistComponent
} from "./diagnostic/pages/dermatologist/schedule-dermatologist/schedule-dermatologist.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {
  RegisterDermatologistComponent
} from "./public/security/register-dermatologist/register-dermatologist.component";
import {RegisterPatientComponent} from "./public/security/register-patient/register-patient.component";
import {RegisterFormComponent} from "./public/security/register-form/register-form.component";

const routes: Routes = [
  { path: '', component: ViewComponent, children:[
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'sign-in', component:RegisterFormComponent},
      { path: 'sign-in-dermatologist', component: RegisterDermatologistComponent},
      { path: 'sign-in-patient', component: RegisterPatientComponent},
      { path: 'login', component:LoginFormComponent},
      { path: 'home', component: HomeComponent },
      { path: 'login-dermatologist', component: LoginFormDermatologistComponent },
      { path: 'login-patient', component: LoginFormPatientComponent },
    ]},

  { path: '', component: ViewPatientComponent, children:[
      { path: 'files-patient', component: MyFilesPatientComponent },
      { path: 'myDoctor-patient', component: MyDoctorPatientComponent },
      { path: 'messages-patient', component:MessagesPatientComponent},
      { path: 'reminders-patient', component: RemindersPatientComponent },
      { path: 'profile-patient', component: ProfilePatientComponent },
      {path:'edit-profile-patient',component:EditProfilePatientComponent}
    ]},

  { path: 'character', component:TypeOfUserComponent},
  { path: 'dermatologist', component:ScheduleDermatologistComponent},
  {path:'',component:ViewDermatologistComponent,children:[
      // {path:'',component:ScheduleDoctorComponent},
      {path:'chats',component:ChatDermatologistComponent},
      {path:'calendar',component:ScheduleDermatologistComponent},
      {path:'patients',component:ListPatientsComponent},
      {path:'profile',component:ProfileDermatologistComponent},
      {path:'edit-profile',component:EditProfileDermatologistComponent},
      {path: 'infoPatientSpecific/:id', component:InfoPatientSpecificComponent}
    ]},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
