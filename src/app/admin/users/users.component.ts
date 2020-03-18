import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  pageArray:number[] = [];
  increCount:number = 0;
  userList:any[] = [];
  currPage:number;

  constructor(private http:HttpClient,private route:ActivatedRoute,private gs:GlobalService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(res => {
      this.gs.fetchUsers(res.page || 1).subscribe(x => {
        this.userList = x['data'];
        this.gs.isLogin = true;
        this.currPage = res.page || 1;

        // Maintain the array for number of pages
        if(this.increCount === 0) {
          this.increCount++;
          for(let i = 1;i <= x['total_pages'];i++) {
            this.pageArray.push(i);
          }
        }
      })
    })
  }

}
