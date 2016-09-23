import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-home',
    templateUrl: 'app-home.component.html'
})
export class AppHomeComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    onWindowResized(size) {
        console.log(size);
    }
}