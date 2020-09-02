import { NOTIFICATION_TYPES } from './../shared/notifications.constant';

export interface INotification {
    type: NOTIFICATION_TYPES 
    message: string
}