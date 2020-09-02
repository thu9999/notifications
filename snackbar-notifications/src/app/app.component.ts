import { Component } from '@angular/core';
import { INotification } from './interfaces/notification';
import { NOTIFICATION_TYPES } from './shared/notifications.constant';
import { NotificationService } from './services/notification.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor( private notificationService: NotificationService ) {}

    onNotify( type: number ): void {
        let notification: INotification;

        switch( type ) {
            case 1:
                notification = {
                    type: NOTIFICATION_TYPES.SUCCESS,
                    message: 'Success notification!'
                };
                break;

            case 2:
                notification = {
                    type: NOTIFICATION_TYPES.ERROR,
                    message: 'Error notification!'
                };
                break;

            default:
                notification = {
                    type: NOTIFICATION_TYPES.WARNING,
                    message: 'Warning notification!'
                };
                break;
        }

        this.notificationService.setNotification( notification );
    }
}
