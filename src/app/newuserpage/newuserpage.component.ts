import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Profile } from 'src/model/profile';
import { ProfileService } from '../profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newuserpage',
  templateUrl: './newuserpage.component.html',
  styleUrls: ['./newuserpage.component.css']
})
export class NewuserpageComponent {
  
  profiles: Profile[] = this.profileService.getProfile();

  profileForm = new FormGroup(
    {
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl(''),
    }
  )

  constructor(private profileService: ProfileService,
              private router: Router){
  }

  addUser():string{
    console.log("Submitted!")
    if (this.profileForm.value.password === this.profileForm.value.confirmPassword) {
      this.profiles.push(new Profile(this.profileForm.value.name, this.profileForm.value.email, this.profileForm.value.password))
      console.log(this.profiles)
      this.router.navigate(['/'])
      return 'Thanks'
    }
    else{
      return 'Passwords do not match'
    }
  }
}
