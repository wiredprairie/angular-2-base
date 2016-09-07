
import { Component, AfterViewInit } from "@angular/core";


import * as moment from "moment";

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `<h1>my second angular 2 app</h1><div>{{ whileAgo | relativedate }}</div>`
})
export class AppComponent implements AfterViewInit {

    whileAgo: string;
    whileAgoCount: number = 0;

    constructor() {

        this.whileAgo = moment().subtract(this.whileAgoCount, "days").format("YYYYMMDD");
    }

    ngAfterViewInit() 
    {
        setInterval(()=> {            
            this.whileAgo = moment().subtract(++this.whileAgoCount, "days").format("YYYYMMDD");
        }, 1000);
    }
 }
