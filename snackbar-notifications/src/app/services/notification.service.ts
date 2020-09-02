import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { INotification } from '../interfaces/notification';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {
    private notification$ = new BehaviorSubject<INotification>( null );

    getNotificationAsObservable(): Observable<INotification> {
        return this.notification$.asObservable();
    }

    setNotification( notification: INotification ): void {
        this.notification$.next( notification );
    }
}
