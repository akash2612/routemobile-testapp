import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LogoutPopupComponent } from './logout-popup/logout-popup.component';
import { GlobalService } from './services/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'routemobile-app';
  constructor(private dialog:MatDialog,private gs:GlobalService,private router:Router) {
  }
  logoutFunc() {
    let dialogRef = this.dialog.open(LogoutPopupComponent,{});
    dialogRef.afterClosed().subscribe(res => {
      if(res == true) {
        this.gs.isLogin = false;
        sessionStorage.removeItem('islogged');
        sessionStorage.removeItem('authToken');
        this.router.navigate(['/login']);
      }
    })
  }
}
