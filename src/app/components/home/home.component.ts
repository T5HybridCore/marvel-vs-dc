import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  form: FormGroup;

  users: any[] = [];

  user: any = {
    name: '',
    email: '',
    genre: '',
    birthday: ''
  };

  constructor() {
    this.form = new FormGroup({
      'name': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'genre': new FormControl('', Validators.required),
      'birthday': new FormControl('', Validators.required)
    });

    this.form.setValue(this.user);
  }

  ngOnInit(): void {
  }

  subscribe(): void {
    let data = localStorage.getItem('users');
    this.users = data != null ? JSON.parse(data) : [];

    // Add to list
    let found = false;
    this.users.forEach(u => {
      if (u.email === this.form.value.email) {
        found = true;
      }
    });

    if (!found) {
      this.users.push(this.form.value);
      localStorage.setItem('users', JSON.stringify(this.users));
      this.form.reset(this.user);
    }
  }

}
