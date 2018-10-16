import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';

import { TaskService } from "./task.service";
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        BodyComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [
        TaskService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
