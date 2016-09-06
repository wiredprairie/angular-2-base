import { Pipe, PipeTransform } from '@angular/core';

import moment from 'moment';

//const m 


@Pipe({
    name: 'moment'
})
export class MomentPipe implements PipeTransform {
    transform(value: any, args: any[]): any {
        
    }
}