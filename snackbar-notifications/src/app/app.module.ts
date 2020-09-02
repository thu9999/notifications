import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotificationDirective } from './directives/notification.directive';
import { MaterialsModule } from './modules/materials/materials.module';
import { DestroyComponent } from './components/destroy/destroy.component';
import { NotificationComponent } from './components/notification/notification.component';

@NgModule({
    declarations: [
        AppComponent,
        NotificationDirective,
        DestroyComponent,
        NotificationComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
