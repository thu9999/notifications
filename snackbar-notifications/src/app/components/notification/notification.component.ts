import { Component, OnInit, Input, ViewChild, ComponentRef } from '@angular/core';
import { INotification } from 'src/app/interfaces/notification';
import { MatButton } from '@angular/material/button';
import { race, fromEvent, timer } from 'rxjs';
import { APP_EVENTS } from 'src/app/shared/events.constant';
import { NOTIFICATION_DURATION, NOTIFICATION_TYPES } from 'src/app/shared/notifications.constant';
import { DestroyComponent } from '../destroy/destroy.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent extends DestroyComponent implements OnInit {
    @ViewChild( 'close', { static: true } ) closeBtn: MatButton;
    @Input() data: INotification;
    @Input() ref: ComponentRef<NotificationComponent>;

    constructor() {
        super();
    }

    ngOnInit(): void {
        race(
            fromEvent( this.closeBtn._elementRef.nativeElement, APP_EVENTS.CLICK ),
            timer( NOTIFICATION_DURATION ),
        ).pipe(
            takeUntil( this.subject )
        ).subscribe( () => this.ref.destroy() );
    }

    get className(): string {
        switch( this.data.type ) {
            case NOTIFICATION_TYPES.ERROR:
            case NOTIFICATION_TYPES.FATAL:
                return 'error';

            case NOTIFICATION_TYPES.WARNING:
                return 'warning'
            
            case NOTIFICATION_TYPES.INFOR:
                return 'infor';

            default:
                return 'success';
        }
    }
}
