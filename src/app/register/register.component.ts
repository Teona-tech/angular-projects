import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm;
  userAgreed;

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService
  ) {
    this.registerForm = this.formBuilder.group({
      email: [''],
      password: ['', [Validators.minLength(7)]],
      confirmPassword: [''],
      nickname: ['', [Validators.minLength(3)]],
      phoneNumber: [''],
      website: [''],
      agreement: [true, false],
    })
  }

  ngOnInit() {
  }

  get email() {
    return this.registerForm.get('email') as FormControl;
  }

  get password() {
    return this.registerForm.get('password') as FormControl;
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword') as FormControl;
  }

  get nickname() {
    return this.registerForm.get('nickname') as FormControl;
  }

  get phoneNumber() {
    return this.registerForm.get('phoneNumber') as FormControl;
  }

  get website() {
    return this.registerForm.get('website') as FormControl;
  }

  get agreement() {
    return this.registerForm.get('agreement') as FormControl;
  }

  isEmailValid(str) {
    let re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,}$/;
    return str.match(re) ? true : false;
  }

  isPasswordValid(str) {
    let re = /^[a-zA-Z0-9]+$/;
    return str.match(re) ? true : false;
  }

  isEqual(password, confirmPassword) {
    return password === confirmPassword;
  }

  isNicknameValid(str) {
    let re = /^[a-zA-Z0-9-]+$/;
    return str.match(re) ? true : false;
  }

  isPhoneNumberValid(str) {
    let re = /^\+380\d{9}$/;
    return str.match(re) ? true : false;
  }

  isWebsiteValid(str) {
    let re = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9]+(-?[a-zA-Z0-9])*\.)+[\w]{2,}(\/\S*)?$/;
    return str.match(re) ? true : false;
  }

  isChecked(agreement) {
    if (agreement.target.checked) {
      this.userAgreed = true;
    } else {
      this.userAgreed = false;
    }
  }

  onSubmit(registerForm) {
    if (
      this.isEmailValid(this.email.value) &&
      this.isPasswordValid(this.password.value) &&
      this.isEqual(this.password.value, this.confirmPassword.value) &&
      this.isNicknameValid(this.nickname.value) &&
      this.isPhoneNumberValid(this.phoneNumber.value) &&
      this.isWebsiteValid(this.website.value)
    ) {
      this.registerService.addUser(registerForm.value);
      this.registerForm.reset({
        email: '',
        password: '',
        confirmPassword: '',
        nickname: '',
        phoneNumber: '',
        website: '',
        agreement: false,
      });
    }
  }
}
