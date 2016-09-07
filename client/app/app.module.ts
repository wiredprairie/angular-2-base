import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RelativePipe } from './pipes/moment.pipe';

// import { AppRoutingModule } from './app.routing'; //TODO: Create app.routing

@NgModule({
    imports: [
        BrowserModule,
        HttpModule   
    ],
    declarations: [ AppComponent, RelativePipe ],
    providers: [/* TODO: Providers go here */],
    bootstrap: [  AppComponent ],
})
export class AppModule { }
