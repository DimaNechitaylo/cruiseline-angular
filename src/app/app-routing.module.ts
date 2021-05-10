import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './component/auth/sign-up/sign-up.component';
import { LoginComponent } from './component/auth/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { ViewCruiseComponent } from './component/view-cruise/view-cruise.component';
import { AuthGuard } from './component/auth/auth.guard';
import { ProfileComponent } from './component/profile/profile.component';
const routes: Routes = [
   { path: '', component: HomeComponent },
   { path: 'view-cruise/:id', component: ViewCruiseComponent, canActivate: [AuthGuard]},
   { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
   { path: 'sign-up', component: SignUpComponent },
   { path: 'login', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
