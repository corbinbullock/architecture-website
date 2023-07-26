import { Component } from '@angular/core';
import { MeetingService } from '../meeting.service';
import { Meeting } from 'src/model/meetings';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent {
  meetings: Meeting[] = this.meetingService.sortDate(this.meetingService.getMeetingAdmin());

  onClick(i: number) {
    this.meetingService.removeMeeting(i);
  }

  constructor(private meetingService: MeetingService){}
}
