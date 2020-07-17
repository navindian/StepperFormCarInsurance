import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabComponent } from './components/tab/tab.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoggedInGuardGuard } from './components/login/_guards/logged-in-guard.guard';

export const routes: Routes = [
  { path: 'signIn', component: LoginComponent },
  { path: 'tab', component: TabComponent, canActivate: [LoggedInGuardGuard] },
  { path: 'signUp', component: SignUpComponent },
  { path: '**', redirectTo: '/signIn', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
