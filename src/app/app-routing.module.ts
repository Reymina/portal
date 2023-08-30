import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { AdminGuard } from './admin.guard';
import { EditUserModalComponent } from './edit-user-modal/edit-user-modal.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FrontPageComponent } from './frontpage/frontpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NotifComponent } from './notif/notif.component';
import { InboxComponent } from './inbox/inbox.component';







const routes: Routes = [
  { path: '', component: FrontPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user-management', component: UserManagementComponent, canActivate: [AdminGuard] },
  { path: 'edit-user-modal/:id', component: EditUserModalComponent, canActivate: [AdminGuard] },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'homepage', component: HomepageComponent},
  { path: 'notif', component: NotifComponent},
  { path: 'inbox', component: InboxComponent},
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [ ],
  exports: [RouterModule]
})
export class AppRoutingModule { }