import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from 'src/page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from 'src/forgot-password/forgot-password.component';
import { DashboardComponent } from 'src/dashboard/dashboard.component';
import { RegistraionComponent } from 'src/registraion/registraion.component';
import { AuthGuard } from './Services/auth.guard';


const routes: Routes = [
  // standard different Layout landing page
  // SiteLayout Landing Page  without having any header and footer or dashboard
 
  // AppLayout Landing Page  having header and footer or dashboard standard different Layout landing page
  
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'forgotPassword', component: ForgotPasswordComponent },
    { path: 'Dashboard', component: DashboardComponent,canActivate:[AuthGuard] },
    { path: 'clientRegistration', component: RegistraionComponent },

  { path: '**', component: PageNotFoundComponent }
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }

// Standard Coding ..  All the route in one place you can export using array  (Best Practice)_
export const routingComponents = [
  LoginComponent,
  HomeComponent, LoginComponent, DashboardComponent, PageNotFoundComponent, ForgotPasswordComponent,
  RegistraionComponent  
];
