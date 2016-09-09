import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';


import { ServerStatus } from "../models/server-status";

@Injectable()
export class ServerStatusService {
    constructor(private http: Http) { }

    private _statusUrl = 'app/status';  // URL to web API
    
    getStatus(): Observable<ServerStatus[]> {
        return this.http.get(this._statusUrl)            
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        const body = res.json();
        return body || {};
    }

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}