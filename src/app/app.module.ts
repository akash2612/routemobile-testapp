import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorIntercept } from './helpers/error.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogoutPopupComponent } from './logout-popup/logout-popup.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    LogoutPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass:ErrorIntercept,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents:[LogoutPopupComponent]
})
export class AppModule { }
