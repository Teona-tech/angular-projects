import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm;

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  ngOnInit() {
  }

  get email() {
    return this.loginForm.get('email') as FormControl;
  }

  get password() {
    return this.loginForm.get('password') as FormControl;
  }

  onSubmit(loginForm) {
    if(loginForm.value.email && loginForm.value.password) {
      if(this.registerService.isUser(loginForm.value.email)) {
        let user = this.registerService.getUsersList().find((item) => {
          return item.email === loginForm.value.email;
        });
        if(loginForm.value.password === user.password) {
          this.registerService.setStatus(true);
          this.router.navigate(['users']);
        } else {
          alert('User not found');
        }
      } else {
        alert('Login failed');
      }
      if(this.registerService.getStatus()) {
        this.loginForm.reset({
          email: '',
          password: ''
        });
      }
    } else {
      alert('All fields are required');
    }
  }
}
