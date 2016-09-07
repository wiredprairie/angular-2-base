import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment';



@Pipe({
    name: 'relativedate'
})
export class RelativePipe implements PipeTransform {
    transform(date: any, args: any[]): any {
        if(typeof date !== "undefined" && date !== null) {
            const m = moment(date);
            return m.fromNow();
        }    
        return "Unknown";
    }
}