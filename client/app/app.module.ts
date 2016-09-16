import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { AppHomeComponent } from "./components/app-home.component";

import { SmilePipe } from './pipes/smile.pipe';
import { ServerStatusComponent } from "./components/server-status.component";
import { ServerStatusService } from "./services/server-status.service";
import appRoutes from "./app.routes";



@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        appRoutes
    ],
    declarations: [
        AppComponent,
        AppHomeComponent,
        SmilePipe,
        ServerStatusComponent
    ],
    providers: [ServerStatusService],
    bootstrap: [AppComponent],
})
export class AppModule { }
