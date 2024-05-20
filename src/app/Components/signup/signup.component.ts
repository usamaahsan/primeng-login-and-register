import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  providers:[MessageService]
})
export class SignupComponent {

  constructor(private router: Router, private messageService: MessageService) {}

  name:String = "";
  email:String = "";
  password:String = "";

  login(){

  }

  register(){
    if(this.email.length === 0 || this.password.length === 0 || this.name.length === 0){
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
      summary:"Register",
      detail:"Registered Successfully"
    });

  }

}
