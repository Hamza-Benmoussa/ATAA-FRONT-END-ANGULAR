import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../service/auth/auth.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFormGroup !: FormGroup;
  submitted : boolean =false;
  loginError: string = '';
  constructor(private fb : FormBuilder , private authService : AuthService) { }

  ngOnInit(): void {
    this.loginFormGroup = this.fb.group({
      username : ["" , [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password:["",Validators.required]
    })
  }

  onLogin() {
    this.submitted = true;

    if (this.loginFormGroup.invalid) return;

    this.authService.login(this.loginFormGroup.value).subscribe({
      next: loginResponse => {
        this.authService.saveToken(loginResponse);
        console.log(loginResponse);
      },
      error: error => {
        if (error.status === 401) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Email or password is incorrect. Please try again.',
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'An error occurred while logging in. Please try again later.',
          });
        }
      }
    });
  }
}
