export class Profile {
    name: string | null | undefined;
    email: string | null | undefined;
    password: string | null | undefined;
    

    constructor(name: string | null | undefined,
                email: string | null | undefined, 
                password: string | null | undefined){
        this.name = name;
        this.email = email;
        this.password = password;
    }

    showProfile(){
        console.log(this.name + "" + this.email + "" + this.password)
    }
}