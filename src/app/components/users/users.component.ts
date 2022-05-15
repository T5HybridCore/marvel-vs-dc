import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any[];

  constructor() {
    let data = localStorage.getItem('users');
    this.users = data != null ? JSON.parse(data) : [];
  }

  ngOnInit(): void {
  }
}
