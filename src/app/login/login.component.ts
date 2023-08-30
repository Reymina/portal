import { Component, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  showPassword: boolean = false;
  loginError: boolean = false;
  errorMessage: string = '';

  capsLockOn: boolean = false;


  passwordVisible: boolean = false;
  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
  
  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();



  constructor(private authService: AuthService, private router: Router, private el: ElementRef) {}

  login(): void {
    const loggedIn = this.authService.login(this.username, this.password);
    if (loggedIn) {
      this.loginError = false;
      if (this.authService.isAdminLoggedIn()) {
        this.router.navigate(['/dashboard']);
      } else {
        this.router.navigate(['/dashboard']);
      }
    } else {
      this.loginError = true;
      this.errorMessage = 'Invalid username or password';
          
    }
    }
  
  cancelLogin() {
    this.cancel.emit();
  }
  
  @HostListener('window:keydown', ['$event'])
  checkCapsLock(event: KeyboardEvent) {
    if (event.getModifierState && event.getModifierState('CapsLock')) {
      // Caps Lock is active
      this.capsLockOn = true;
    } else {
      // Caps Lock is not active
      this.capsLockOn = false;
    }
  }

}