import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabComponent } from './components/tab/tab.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoggedInGuardGuard } from './components/login/_guards/logged-in-guard.guard';
import { AdminComponent } from './components/admin/admin.component';
import { PaymentComponent } from './components/tab/mtpl-policy/Steps/payment/payment.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { UsersComponent } from './components/admin/users/users.component';
import { BrokerCompanyComponent } from './components/admin/broker-company/broker-company.component';
import { GroupsComponent } from './components/admin/groups/groups.component';
import { ContentComponent } from './components/admin/content/content.component';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { AdminLoginGuardGuard } from './components/admin/admin-login-guard.guard';
import { CreateUserComponent } from './components/admin/create-user/create-user.component';
import { ProfileComponent } from './components/admin/profile/profile.component';
import { ChangePasswordComponent } from './components/admin/change-password/change-password.component';
import { RequestResetComponent } from './components/forget-password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/forget-password/response-reset/response-reset.component';

export const routes: Routes = [
  { path: 'signIn', component: LoginComponent },
  { path: 'tab', component: TabComponent, canActivate: [LoggedInGuardGuard] },
  { path: 'signUp', component: SignUpComponent },
  {path: 'loginAsAdmin',component: AdminLoginComponent},
  { path: 'request', component: RequestResetComponent},
 { path: 'response', component: ResponseResetComponent },
          
  {
    path: 'admin',
    component: AdminComponent,
    children: [
          {
            path: 'dashboard', // child route path
            component: DashboardComponent,// child route component that the router renders
          },
          {
            path: 'users',
            component: UsersComponent,
          },
          {
            path: 'users/create-user',
            component: CreateUserComponent,
          },
          {
            path: 'create-intermediate-master',
            component: BrokerCompanyComponent,
          },
          {
            path: 'create-group',
            component: GroupsComponent,
          },
          {
            path: 'news-list',
            component: ContentComponent,
          },
          {
            path: 'profile',
            component: ProfileComponent
          },
          {
            path: 'profile/change-password',
            component: ChangePasswordComponent
          },
          
          {
            path: '**',
            component: DashboardComponent
          }
        ], 
        canActivate: [AdminLoginGuardGuard]
   },
  { path: '**', redirectTo: '/signIn', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
