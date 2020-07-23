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

export const routes: Routes = [
  { path: 'signIn', component: LoginComponent },
  { path: 'tab', component: TabComponent, canActivate: [LoggedInGuardGuard] },
  { path: 'signUp', component: SignUpComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard', // child route path
        component: DashboardComponent, // child route component that the router renders
      },
      {
        path: 'create-user',
        component: UsersComponent,
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
        path: '**',
        redirectTo: "dashboard",
      }
    ],
  },
  { path: '**', redirectTo: '/signIn', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
