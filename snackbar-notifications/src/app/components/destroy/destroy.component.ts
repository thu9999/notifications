import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-destroy',
    templateUrl: './destroy.component.html'
})
export class DestroyComponent implements OnDestroy {

    subject = new Subject<any>();

    constructor() { }

    ngOnDestroy(): void {
        this.subject.next();
    }
}
