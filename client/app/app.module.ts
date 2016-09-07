import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { SmilePipe } from './pipes/smile.pipe';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule
    ],
    declarations: [ AppComponent, SmilePipe ],
    providers: [/* TODO: Providers go here */],
    bootstrap: [  AppComponent ],
})
export class AppModule { }
