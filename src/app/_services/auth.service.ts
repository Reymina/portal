import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInUser: any = null;

  private users = [
    { username: 'admin', password: 'adminpassword', isAdmin: true },
    { username: 'berna', password: 'userpassword1', isAdmin: false },
    { username: 'reymina', password: 'userpassword2', isAdmin: false },
    { username: 'charles', password: 'userpassword3', isAdmin: false}
  ];
  isUserLoggedIn: any;

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      this.loggedInUser = user;
      return true;
    }
    return false;
  }

  addUser(newUser: { username: string; password: string; isAdmin: boolean }): void {
    this.users.push(newUser);
  }

  logout(): void {
    this.loggedInUser = null;
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.loggedInUser !== null;
  }

  isAdminLoggedIn(): boolean {
    return this.loggedInUser && this.loggedInUser.isAdmin;
  }
  getLoggedInUser(): any {
    return this.loggedInUser;
  }
}