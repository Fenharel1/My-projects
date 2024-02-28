import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  public formLogin!: FormGroup;

  hide = true;
  
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
    
  }

  getErrorMessage() {
    if (this.formLogin.controls['email'].hasError('required')) {
      return 'You must enter a value';
    }
    return this.formLogin.controls['email'].hasError('email') ? 'Not a valid email' : '';
  }

  login(){
    if(this.formLogin.valid){
      if(this.authService.login(
        this.formLogin.value['email'],
        this.formLogin.value['password'])){

        console.log('logeado con exito!');
        this.authService.setAuthToken("TOKEN_AUTENTICACION");
        this.router.navigate(['/home']);
      }else{
        console.log('loggin fallido')
      }
    }
  }
}
