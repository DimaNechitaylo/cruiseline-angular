import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
   { path: '', component: HomeComponent },
   { path: 'test', component: TestComponent },
   { path: 'sign-up', component: SignUpComponent },
   { path: 'login', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
