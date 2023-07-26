import { Component } from '@angular/core';
import { Profile } from 'src/model/profile';
import { ProfileService } from '../profile.service';
import { MainpageService } from '../mainpage.service';
import { CurrentUser } from 'src/model/currentuser';

import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})

export class MainpageComponent {

  profiles: Profile[] = this.profileService.getProfile();
  errorMessage: string="";

  loginForm = new FormGroup(
    {
      email: new FormControl(''),
      password: new FormControl('')
    }
  )
  
  constructor(private profileService: ProfileService, 
              private router: Router,
              private mainpageService: MainpageService) {
  }

  login(): void{ 
    for(let i = 0; i < this.profiles.length; i++) {
      if (this.profiles[i].email === this.loginForm.value.email) {
        if(this.profiles[i].password === this.loginForm.value.password){
          this.errorMessage = ""
          this.mainpageService.setCurrentUser(new CurrentUser(this.profiles[i].name!, this.profiles[i].email!))  
          this.router.navigate(['/profilepage'])
        }
        else {
          this.errorMessage = "Incorrect Password"
        }
      }
      else {
        this.errorMessage = "Invalid Email"
      }
    }
    return 
  }

}
