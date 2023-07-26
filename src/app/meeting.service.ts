import { Injectable } from '@angular/core';
import { Meeting } from 'src/model/meetings';
import { MainpageService } from './mainpage.service';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  meetings: Meeting[] = [
    new Meeting("Corbin", "corbin@123.com", 2,  "2023-07-28T08:00"),
    new Meeting("Huck", "Dog@a.com", 3, "2023-08-01T14:00"),
    new Meeting("Corbin", "corbin@123.com", 4, "2023-08-02T09:30"),
    new Meeting("Laura","laura@tgt.com",3, "2023-08-09T08:30"),
    new Meeting("Carlos", "teacher@sl.com", 2,"2023-08-09T12:00"),
    new Meeting("Laura","laura@tgt.com",3, "2023-08-16T08:30"),
    new Meeting("Huck", "Dog@a.com", 3, "2023-08-01T14:00"),
    new Meeting("Carlos", "teacher@sl.com", 2,"2023-08-02T13:00")
  ]
  
  constructor(private mainpageService: MainpageService) { }

  getMeetingUser(): Meeting[] {
    let userMeetings = []
    for(let i = 0; i < this.meetings.length; i++){
      if (this.mainpageService.currentProfile.currentEmail === this.meetings[i].email){
        console.log(this.mainpageService.currentProfile.currentEmail)
        userMeetings.push(this.meetings[i])

      }
    }
    return userMeetings;
  }
  getMeetingAdmin(): Meeting[] {
    return this.meetings;
  }

  setMeeting(request: Meeting): void {
    this.meetings.push(request);
  }

  sortDate(request: Meeting[]) {
    return request.sort((a,b) => a.date!.localeCompare(b.date!))
  }
  
  removeMeeting(remove: number): void{
    this.meetings.splice(remove,1);
  }
    

}
