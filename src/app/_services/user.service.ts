import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
  }[] = [];

  addUser(user: {
    firstName: string;
    lastName: string;
    username: string;
    password: string;
  }): void {
   
    const id = this.users.length > 0 ? this.users[this.users.length - 1].id + 1 : 1;
    this.users.push({ id, ...user });
  }

  getUsers(): any[] {
    return this.users;
  }

  getUserById(id: number): any {
    return this.users.find(user => user.id === id);
  }
  
  updateUser(user: any): void {
    const index = this.users.findIndex(u => u.id === user.id);
    if (index !== -1) {
      this.users[index] = user;
    }
  }
}