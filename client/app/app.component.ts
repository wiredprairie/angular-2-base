
import { Component, AfterViewInit } from "@angular/core";
import "./rxjs-operators";


@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: "app.component.html" 
})
export class AppComponent implements AfterViewInit {

    private isHappy: string = "";

    constructor() {

    }

    ngAfterViewInit() 
    {
    }
 }
