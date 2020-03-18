import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { GlobalService } from 'src/app/services/global.service';
import { LoginData } from 'src/app/models/login-data.model';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ValidationPopupComponent } from '../validation-popup/validation-popup.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild(FormGroupDirective,{static:false}) formRef: FormGroupDirective;

  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
    password: new FormControl('',[Validators.required])
  })

  loginModel:LoginData;

  constructor(private gs:GlobalService,private router:Router,private dialog:MatDialog) { }

  ngOnInit() {
    if(sessionStorage.getItem('islogged') !== null) {
      this.router.navigate(['/users']);
    }
  }

  onSubmit() {
    if(this.loginForm.valid) {
      this.loginModel = new LoginData(this.loginForm.value.email,this.loginForm.value.password);
      this.gs.authLogin(this.loginModel).subscribe(res=> {
        this.gs.isLogin = true;
        sessionStorage.setItem('authToken',res.token);
        sessionStorage.setItem('islogged',String(this.gs.isLogin));
        this.router.navigate(['/users']);
      })
    }else {
      if(this.loginForm.get('email').valid === false) {
        this.gs.errorMsg = 'Invalid Email!!!';
      }else {
        this.gs.errorMsg = 'Password Required';
      }
      let dialogRef = this.dialog.open(ValidationPopupComponent, {
      })
      dialogRef.afterClosed().subscribe(res => {
        this.formRef.resetForm();
        this.gs.errorMsg = '';
      })
    }
  }

}
