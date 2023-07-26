import { Injectable } from '@angular/core';
import { CurrentUser } from 'src/model/currentuser';

@Injectable({
  providedIn: 'root'
})
export class MainpageService {

  currentProfile: CurrentUser = {
    currentUser: '',
    currentEmail: ''
  };

  constructor() { }

  setCurrentUser(user: CurrentUser): void {
    this.currentProfile = user
  }

  getCurrentUser(): CurrentUser {
    return this.currentProfile;
  }
}
