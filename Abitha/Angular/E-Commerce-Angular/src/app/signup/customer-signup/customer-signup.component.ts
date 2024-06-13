import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomerSignupService } from '../../services/customer-signup.service';
import { ShopService } from '../../services/shop.service';
import { Signup } from '../../models/dataTypes';

@Component({
  selector: 'app-customer-signup',
  templateUrl: './customer-signup.component.html',
  styleUrls: ['./customer-signup.component.css']
})
export class CustomerSignupComponent implements OnInit {
  public signupMsg: string = '';
  public isLogin: boolean = false;

  constructor(private fb: FormBuilder, private signupService: CustomerSignupService, private shopService: ShopService) { }

  customerSignupForm = this.fb.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  customerLoginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  ngOnInit(): void {
    this.signupService.reloadSeller();
  }

  toggleForm(): void {
    this.isLogin = !this.isLogin;
  }

  onSignup(): void {
    let userData = this.customerSignupForm.value as Signup;
    this.signupService.signupUser(userData).subscribe((res) => {
      if (res) {
        this.signupMsg = `You Have Successfully Signed Up, Please Login`;
        this.customerSignupForm.reset();
      }
    }, (err) => {
      this.signupMsg = err.error.msg;
      this.customerSignupForm.reset();
    });
  }

  onLogin(): void {
    let userData = this.customerLoginForm.value as Signup;
    this.signupService.loginUser(userData);
    this.signupService.signupMsg.subscribe((res) => {
      if (res) {
        this.signupMsg = "Please Enter Valid Credentials";
        this.customerLoginForm.reset();
      }
    });
  }
}
