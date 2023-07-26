import { DatePipe} from "@angular/common";

export class Meeting {
    name: string | null | undefined;
    email: string | null | undefined;
    attendees: number | null | undefined;
    date: string | null | undefined;

    constructor(name: string | null | undefined,
                email: string | null | undefined,
                attendees: number | null | undefined,
                date: string|  null | undefined){
        this.name = name;
        this.email = email;
        this.attendees = attendees;
        this.date = date;
    }

}