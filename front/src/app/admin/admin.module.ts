import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminComponent} from './admin.component';
import {AddUserComponent} from './users/add-user/add-user.component';
import {ViewuserComponent} from './users/viewuser/viewuser.component';
import {UsersComponent} from './users/users.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {FormsModule} from '@angular/forms';

import {KnobModule} from 'primeng/knob';
import {ChartModule} from 'primeng/chart';
import {CardModule} from 'primeng/card';
import {AdminRoutingModule} from './admin-routing.module';
import {PanelMenuModule} from 'primeng/panelmenu';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import {DividerModule} from 'primeng/divider';
import {AccordionModule} from 'primeng/accordion'

import { HeaderComponent } from '../Components/admin/header/header.component';
import { SidenavComponent } from '../Components/admin/sidenav/sidenav.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatListModule} from "@angular/material/list";
import {RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {DialogModule} from "primeng/dialog";
import {MessageModule} from "primeng/message";
import {TableModule} from "primeng/table";

import {RatingModule} from "primeng/rating";
import {ScrollPanelModule} from "primeng/scrollpanel";

import {TabViewModule} from 'primeng/tabview';
import {ProjectsComponent} from "./projects/projects.component"
import { AddprojectComponent } from './projects/addproject/addproject.component';
import { ViewprojectComponent } from './projects/viewproject/viewproject.component';
import {DropdownModule} from "primeng/dropdown";
import { DonationsComponent } from './dashboard/donations/donations.component';
import { CaseComponent } from './case/case.component';
import { ViewcaseComponent } from './case/viewcase/viewcase.component';
import {PagesModule} from "../pages/pages.module";
import { AllCasesComponent } from './dashboard/all-cases/all-cases.component';

@NgModule({
  declarations: [
    AdminComponent,
    UsersComponent,
    AddUserComponent,
    ViewuserComponent,
    DashboardComponent,
    HeaderComponent,
    SidenavComponent,
    ProjectsComponent,
    AddprojectComponent,
    ViewprojectComponent,
    DonationsComponent,
    CaseComponent,
    ViewcaseComponent,
    AllCasesComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule,
    AccordionModule,
    DividerModule,
    ButtonModule,
    SidebarModule,
    PanelMenuModule,
    FormsModule,
    ChartModule,
    CardModule, KnobModule,

    TabViewModule,

    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule, MatListModule, MatButtonModule, DialogModule, MessageModule,
    TableModule, RatingModule, ScrollPanelModule, DropdownModule,
    PagesModule,
  ],
    exports: [
        AdminComponent,
    ]
})
export class AdminModule {
}
