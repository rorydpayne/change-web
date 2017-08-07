export class User {
    firstName: string;
    lastName: string;
    email: string;
    constructor() { }


    getFirstName(): string {
        return this.firstName;
    }

    setFirstName(value: string) {
        this.firstName = value;
    }

    getLastName(): string {
        return this.lastName;
    }

    setLastName(value: string) {
        this.lastName = value;
    }

    getEmail(): string {
        return this.email;
    }

    setEmail(value: string) {
        this.email = value;
    }
}
