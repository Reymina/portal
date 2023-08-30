import { Component } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { MatDialog } from '@angular/material/dialog'; 
import { AddUserModalComponent } from '../add-user-modal/add-user-modal.component';
import { User } from '../user.model';
import { EditUserModalComponent } from '../edit-user-modal/edit-user-modal.component';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent {
  users: {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
  }[];

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.users = userService.getUsers();
  }

  isUserAdmin(): boolean {
    return this.authService.isAdminLoggedIn();
  }

  editUser(userId: number): void {
    const dialogRef = this.dialog.open(EditUserModalComponent, {
      data: { userId }
    });

    dialogRef.afterClosed().subscribe(result => {
     
    });
  }

  deleteUser(id: number): void {
    const index = this.users.findIndex(user => user.id === id);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }

  openAddUserDialog(): void {
    const dialogRef = this.dialog.open(AddUserModalComponent, {
      width: '400px',
      data: {
        users: this.users 
      }
    });
  
    dialogRef.afterClosed().subscribe((newUser: User) => {
      if (newUser) {
        this.users.push(newUser);
      
      }
    });
  }
}