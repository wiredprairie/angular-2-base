import { Component, OnInit } from '@angular/core';

import { ServerStatusService } from "../services/server-status.service";
import { ServerStatus } from "../models/server-status";

@Component({
    moduleId: module.id,
    selector: 'server-status',
    templateUrl: 'server-status.component.html'
})
export class ServerStatusComponent implements OnInit {

    status: ServerStatus[];
    errorMessage: string;
    seriously = "yep";

    constructor(private serverStatusService:ServerStatusService) { }

    ngOnInit() { 
        this.getStatus();
    }


    getStatus() {
        this.serverStatusService.getStatus()
            .subscribe(this.updateStatus.bind(this), 
                        error => this.errorMessage = <any> error);
    }

    private updateStatus(update) {
        this.status = update;
    }
}