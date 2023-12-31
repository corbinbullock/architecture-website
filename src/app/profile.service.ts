import { Injectable } from '@angular/core';
import { Profile } from 'src/model/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  profiles: Profile[] = [
    new Profile("Corbin","corbin@123.com","1234"),
    new Profile("Huck", "Dog@a.com", "woof"),
    new Profile("Carlos", "teacher@sl.com","simplilearn"),
    new Profile("Laura","laura@tgt.com","password")
  ];

  constructor() { }

  getProfile(): Profile[] {
    return this.profiles;
  }
  
}
