import { Directive, TemplateRef, ViewContainerRef, OnInit, OnDestroy, ComponentFactoryResolver, ViewRef, ComponentRef } from '@angular/core';
import { NotificationService } from '../services/notification.service';
import { takeUntil, filter } from 'rxjs/operators';
import { INotification } from '../interfaces/notification';
import { Subject } from 'rxjs';
import { NotificationComponent } from '../components/notification/notification.component';

@Directive({
  selector: '[notifications]'
})
export class NotificationDirective implements OnInit, OnDestroy {
    private subject = new Subject();

    constructor( private viewContaineRef: ViewContainerRef,
                 private componentFactoryResolver: ComponentFactoryResolver,
                 private notificationService: NotificationService ) { 
    }

    ngOnInit() {
        this.notificationService.getNotificationAsObservable().pipe(
            filter( notification => !!notification ),
            takeUntil( this.subject )
        ).subscribe( ( notification: INotification ) => {
            const notificationFactory = this.componentFactoryResolver.resolveComponentFactory( NotificationComponent );
            const notificationRef = this.viewContaineRef.createComponent( notificationFactory );
            notificationRef.instance.data = notification;
            notificationRef.instance.ref = notificationRef;
        } );
    }

    ngOnDestroy(): void {
        this.subject.next();
        this.subject.complete();
    }
}
