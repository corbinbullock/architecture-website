import { Component } from '@angular/core';
import { Profile } from 'src/model/profile';
import { ProfileService } from '../profile.service';
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

  
  constructor(private profileService: ProfileService, private router: Router) {
  }

  login(): void{ 
    for(let i = 0; i < this.profiles.length; i++) {
      if (this.profiles[i].email === this.loginForm.value.email) {
        if(this.profiles[i].password === this.loginForm.value.password){
          console.log("WOOHOO")
          this.errorMessage = ""
          this.router.navigate(['/profilepage'])
        }
        else {
          console.log("Womp womp")
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
