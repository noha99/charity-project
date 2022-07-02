import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {AdminModule} from './admin/admin.module';
import {HttpClientService} from "./service/http-client.service";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";



@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        NoopAnimationsModule,
        AppRoutingModule,
        RouterModule,
        HttpClientModule,
        AdminModule,
    ],
    providers: [
        HttpClientService
    ],
    exports: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
