import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  
  errorMessage: string="";

  loginForm = new FormGroup(
    {
      email: new FormControl(''),
      password: new FormControl('')
    }
  )

  constructor(private router: Router){}

  login(): void{ 
    if ("admin@annas.com" === this.loginForm.value.email) {
      if("admin" === this.loginForm.value.password){
        this.errorMessage = ""
        this.router.navigate(['/adminpage'])
      }
      else {
        this.errorMessage = "Incorrect Password"
      }
    }
    else {
      this.errorMessage = "Invalid Email"
    }
  
    return 
  }

}
