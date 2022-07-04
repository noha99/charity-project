import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DataViewModule} from 'primeng/dataview';
import {RatingModule} from 'primeng/rating';
import {DropdownModule} from 'primeng/dropdown';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {DividerModule} from 'primeng/divider';
import {ScrollPanelModule} from 'primeng/scrollpanel';


import {PagesRoutingModule} from './pages-routing.module';
import {RouterModule} from '@angular/router';
import {PagesComponent} from './pages.component';
import {HomeComponent} from './home/home.component';
import {DialogModule} from "primeng/dialog";
import {InputTextModule} from "primeng/inputtext";
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {HeaderComponent} from "../Components/header/header.component";
import {FooterComponent} from "../Components/footer/footer.component";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {TableModule} from 'primeng/table';
import {DonationComponent} from "./donation/donation.component";
import {ListboxModule} from 'primeng/listbox';
import {DonateComponent} from "../Components/donate/donate.component";
import { ProjectsComponent } from './projects/projects.component';
import { ProjectinfoComponent } from './projects/projectinfo/projectinfo.component';
import { CasesComponent } from './cases/cases.component';
import { CaseinfoComponent } from './cases/caseinfo/caseinfo.component';
import { AddcaseComponent } from './cases/addcase/addcase.component';
import {MessageModule} from "primeng/message";

@NgModule({
    declarations: [
        PagesComponent,
        HomeComponent,
        DonationComponent,
        HeaderComponent,
        FooterComponent,
        DonateComponent,
        ProjectsComponent,
        ProjectinfoComponent,
        CasesComponent,
        CaseinfoComponent,
        AddcaseComponent
    ],
    exports: [
        AddcaseComponent
    ],
    imports: [
        CommonModule,
        PagesRoutingModule,

        CommonModule,
        RouterModule,
        PagesRoutingModule,
        FormsModule,
        DividerModule,
        DataViewModule,
        RatingModule,
        DropdownModule,
        ButtonModule,
        DialogModule,
        ScrollPanelModule,
        InputTextModule,
        OverlayPanelModule,
        MatIconModule,
        MatButtonModule,
        TableModule,
        ListboxModule,
        MessageModule,
    ]
})
export class PagesModule {
}
