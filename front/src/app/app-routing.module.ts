import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {HomeComponent} from './pages/home/home.component';
import {PagesComponent} from './pages/pages.component';
import {SignupComponent} from "./register/signup/signup.component";
import {RegisterComponent} from "./register/register.component";
import { LoginComponent } from './register/login/login.component';

const routes: Routes = [
  {
    path: 'pages',
    component: PagesComponent,
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: 'register',
    component: RegisterComponent,
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'admin',
    component: AdminComponent,
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {path: 'home', component: HomeComponent},

  {path: '**' , component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
