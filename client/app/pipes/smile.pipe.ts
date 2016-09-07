import { Pipe, PipeTransform } from '@angular/core';



@Pipe({
    name: 'smile'
})
export class SmilePipe implements PipeTransform {
    transform(str: any, args: any[]): any {
        if (typeof str === "string") {
            const len = str.length;
            if (len === 0) { return ":("; }
            if (len < 2) { return `${str} :)`; }
            
            return `${str} :D`;
        }
        // just return an unhappy face
        return ":(";
    }
}