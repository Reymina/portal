import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserManagementComponent } from './user-management/user-management.component';

import { FormsModule } from '@angular/forms';
import { AuthService } from './_services/auth.service';
import { UserService } from './_services/user.service';
import { AdminGuard } from './admin.guard';
import { DashboardComponent } from './dashboard/dashboard.component';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faLock, faEye, faUser } from '@fortawesome/free-solid-svg-icons';

import { ErrorModalComponent } from './error-modal/error-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FrontPageComponent } from './frontpage/frontpage.component';
import { AddUserModalComponent } from './add-user-modal/add-user-modal.component';
import { EditUserModalComponent } from './edit-user-modal/edit-user-modal.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NotifComponent } from './notif/notif.component';
import { InboxComponent } from './inbox/inbox.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserManagementComponent,
    DashboardComponent,
    ErrorModalComponent,
    FrontPageComponent,
    AddUserModalComponent,
    EditUserModalComponent,
    HomepageComponent,
    NotifComponent,
    InboxComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule, 
    MatInputModule
  ],
  providers: [AuthService, UserService, AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
  constructor (private library: FaIconLibrary) {
    library.addIcons( 
      faFacebook, 
      faTwitter, 
      faInstagram, 
      faYoutube,
      faGlobe,
      faLock, 
      faEye,
      faUser
      
      );
  }
}
