import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class RegisterService {

    users;
    isLoggedIn = false;

    constructor() {
        this.users = [];
    }

    addUser(user) {
        this.users.push(user);
    }

    removeUser(user) {
        let index = this.users.indexOf(user);
        this.users.splice(index, 1);
    }

    getUsersList() {
        return this.users;
    }

    isUser(email) {
        for (const user of this.users) {
            if(user.email === email) {
                return true;
            }
        }
        return false;
    }

    getStatus() {
        return this.isLoggedIn;
    }

    setStatus(status) {
        this.isLoggedIn = status;
    }
}
