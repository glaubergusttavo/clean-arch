interface UserProps{
    name: string;
    email: string;
    password: string;
}

export class User{
    private name: string
    private email: string
    private password: string

    get getName(){
        return this.name;
    }

    get getEmail(){
        return this.email;
    }

    get getPassword(){
        return this.password;
    }

    constructor(props: UserProps){
        this.name = props.name
        this.email = props.email
        this.password = props.password
    }
}