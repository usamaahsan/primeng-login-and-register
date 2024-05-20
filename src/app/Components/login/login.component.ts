import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers:[MessageService]
})


export class LoginComponent {

  constructor(private router: Router, private messageService: MessageService) {}

  email:String = "";
  password:String = "";

  rememberMe:boolean = true;

  forgotPasswordClicked(){
    console.log('Forgot password clicked');
  }

  login(){

    if(this.email.length === 0 || this.password.length === 0){
      this.messageService.add({
        severity:"error",
        summary:"Error",
        detail:"Please fill required fields"
      });
      return;
    }

    if(!this.email.includes('@')){
      this.messageService.add({
        severity:"error",
        summary:"Error",
        detail:"Email is not valid"
      });
      return;
    }

    this.messageService.add({
      severity:"success",
      summary:"Login",
      detail:"Login Successful"
    });

  }

  register(){
    this.router.navigateByUrl('/register');
  }


}
