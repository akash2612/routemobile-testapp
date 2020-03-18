import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-validation-popup',
  templateUrl: './validation-popup.component.html',
  styleUrls: ['./validation-popup.component.scss']
})
export class ValidationPopupComponent implements OnInit {
  errMsg:string;

  constructor(private gs:GlobalService) { }
  ngOnInit() {
    this.errMsg = this.gs.errorMsg;
  }

}
