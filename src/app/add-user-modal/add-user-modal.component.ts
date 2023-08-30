import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user-modal',
  templateUrl: './add-user-modal.component.html',
  styleUrls: ['./add-user-modal.component.css']
})
export class AddUserModalComponent {
  lastUserId: number = 0; 
  newUser: User = {
    id: 0,
    firstName: '',
    lastName: '',
    username: '',
    
  };

  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<AddUserModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    const existingUserIds = data.users.map((user: User) => user.id);
    this.lastUserId = Math.max(...existingUserIds, 0);
  }

  
  submitForm(): void {
   
    if (
      !this.newUser.firstName ||
      !this.newUser.lastName ||
      !this.newUser.username
    ) {
      return;
    }
    
    this.newUser.id = ++this.lastUserId;
    this.dialogRef.close(this.newUser);
  }

  cancel(): void {
    this.dialogRef.close();
  }
}