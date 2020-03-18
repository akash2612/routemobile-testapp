import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import {routes} from './admin.routing';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from '../helpers/auth.guard';
import { ValidationPopupComponent } from './validation-popup/validation-popup.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [LoginComponent, UsersComponent, ValidationPopupComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers:[AuthGuard],
  entryComponents:[ValidationPopupComponent]
})
export class AdminModule { }
