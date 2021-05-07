import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './component/auth/sign-up/sign-up.component';
import { LoginComponent } from './component/auth/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { ViewCruiseComponent } from './component/view-cruise/view-cruise.component';

const routes: Routes = [
   { path: '', component: HomeComponent },
   { path: 'view-cruise/:id', component: ViewCruiseComponent},
   { path: 'sign-up', component: SignUpComponent },
   { path: 'login', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
