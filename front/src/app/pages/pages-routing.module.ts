import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DonationComponent} from './donation/donation.component';
import {ProjectsComponent} from "./projects/projects.component";
import {ProjectinfoComponent} from "./projects/projectinfo/projectinfo.component";
import {CasesComponent} from "./cases/cases.component";
import {CaseinfoComponent} from "./cases/caseinfo/caseinfo.component";

const routes: Routes = [

  {path: 'donation', component: DonationComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'projectinfo', component: ProjectinfoComponent},
  {path: 'cases', component: CasesComponent},
  {path: 'caseinfo', component: CaseinfoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
