import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UsersComponent} from './users/users.component';
import {ProjectsComponent} from "./projects/projects.component";
import {CaseComponent} from "./case/case.component";

const routes: Routes = [
  {path: '' , redirectTo:'dashboard' , pathMatch:'full'},
  {path: 'users', component: UsersComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'case', component: CaseComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
