import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  showLogoutConfirmation = false;

  constructor(public authService: AuthService, private router: Router) {}

  get isLoggedIn(): boolean {
    return this.authService.isAdminLoggedIn();
  }

 logout(): void {
  this.authService.logout();
  this.showLogoutConfirmation = false; 
  this.router.navigateByUrl('/');
}
  showLogoutModal() {
    this.showLogoutConfirmation = true;
  }

  cancelLogout() {
    this.showLogoutConfirmation = false;
  }

}