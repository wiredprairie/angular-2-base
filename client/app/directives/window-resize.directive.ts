import { Directive, ElementRef, Input, Renderer, Output, EventEmitter, OnDestroy, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

interface WindowSize {
    width: number;
    height: number;
}

@Directive({ selector: "[window-resize]" })
export class WindowResizeDirective implements OnInit, OnDestroy {
    private subscription: Subscription;
    private currentSize: WindowSize;

    @Output("window-resize")        // allows binding of event directly to the directive name
    windowResized = new EventEmitter<WindowSize>();

    constructor(private el: ElementRef, private renderer: Renderer) {
    }

    private updateAttribute(size: WindowSize) {
        this.renderer.setElementAttribute(this.el.nativeElement, "window-size", JSON.stringify(size));
    }

    ngOnInit() {
        this.subscription = throttledResize$.subscribe((size) => {
            this.windowResized.emit(size);
            this.updateAttribute(size);
            this.currentSize = size;
        });        
    }

    ngOnDestroy() {
        // remove the window subscription when it's not in use
        this.subscription.unsubscribe();
    }
}

// there only needs to be one of these per page as the information can be shared across 
// many subscriptions
const throttledResize$ =
    Observable.fromEvent(window, "resize")
        .throttleTime(200)
        .distinctUntilChanged()         // don't repeat yourself (if that's happened)
        .map<WindowSize>(e => { return getWindowSize(); })
        .startWith(getWindowSize());

function getWindowSize(): WindowSize {
    return { 
        height: window.innerHeight, 
        width: window.innerWidth 
    };
}




