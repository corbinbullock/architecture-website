export class CurrentUser {
    currentUser: string;
    currentEmail: string;

    constructor(currentUser: string,
                currentEmail: string) {
        this.currentUser = currentUser;
        this.currentEmail = currentEmail;
    }
}