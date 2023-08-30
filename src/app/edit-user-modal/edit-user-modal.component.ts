import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../_services/user.service';


@Component({
  selector: 'app-edit-user-modal',
  templateUrl: './edit-user-modal.component.html',
  styleUrls: ['./edit-user-modal.component.css']
})
export class EditUserModalComponent implements OnInit {

  editedUser: any = {}; 
  
  user!: {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    isAdmin: boolean;
  };


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    public dialogRef: MatDialogRef<EditUserModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { userId: number }
  ) {}

  
  ngOnInit(): void {
    if (this.data.userId) {
      this.user = this.userService.getUserById(this.data.userId);
      if (!this.user) {
        this.router.navigate(['/user-management']);
      } else {
       
        this.editedUser = { ...this.user };
      }
    }
  }

  onSave(): void {
    if (this.editedUser) {
      Object.assign(this.user, this.editedUser);
      this.userService.updateUser(this.user);
      this.router.navigate(['/user-management']);
      this.dialogRef.close(); 
    }
  
  }
  onCancel(): void {
    this.dialogRef.close();
  }
}