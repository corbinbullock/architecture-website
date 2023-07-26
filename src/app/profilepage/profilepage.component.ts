import { Component, Input } from '@angular/core';
import { Profile } from 'src/model/profile';
import { ProfileService } from '../profile.service';
import { MainpageService } from '../mainpage.service';
import { CurrentUser } from 'src/model/currentuser';
import { Meeting } from 'src/model/meetings';
import { MeetingService } from '../meeting.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.css']
})
export class ProfilepageComponent {

  profiles: Profile[] = this.profileService.getProfile();
  meetings: Meeting[] = this.meetingService.getMeetingAdmin();
  meetingsLoop: Meeting[] = this.meetingService.sortDate(this.meetingService.getMeetingUser());
  currentProfile: CurrentUser = this.mainpageService.getCurrentUser();
  meetingMessage = "";

  
  meetingForm = new FormGroup(
    {
      attendees: new FormControl(0),
      date: new FormControl('') 
    }
  )

  constructor(private profileService: ProfileService,
              private mainpageService: MainpageService,
              private meetingService: MeetingService){
  }

  requestMeeting(): void {
    console.log("request working")
    for(let i = 0; i < this.meetings.length; i++){
      console.log("For works")
      if(this.meetingForm.value.date != this.meetings[i].date) {
        let newMeet = new Meeting(this.currentProfile.currentUser, this.currentProfile.currentEmail, this.meetingForm.value.attendees, this.meetingForm.value.date);
        this.meetingService.setMeeting(newMeet)
        this.meetingsLoop = this.meetingService.sortDate(this.meetingService.getMeetingUser());
        this.meetingMessage = "Meeting Requested";
        console.log(this.meetingsLoop)
      }
      else {
        this.meetingMessage = "Anna is unavailable at this time, please request a different time"
        return
      }
    return}
  }


}
