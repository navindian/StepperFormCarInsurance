import { CdkStepper } from '@angular/cdk/stepper';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';
import { routes } from 'src/app/app-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdditionalCoversComponent } from './components/tab/mtpl-calculator/Steps/additional-covers/additional-covers.component';
import { ContactDetailsComponent } from './components/tab/mtpl-policy/Steps/contact-details/contact-details.component';
import { DeliveryComponent } from './components/tab/mtpl-policy/Steps/delivery/delivery.component';
import { InstallmentComponent } from './components/tab/mtpl-calculator/Steps/installment/installment.component';
import { OrdinalPipe } from './components/shared/ordinal-pipe/ordinal.pipe';
import { InsuringPartyComponent } from './components/tab/mtpl-calculator/Steps/insuring-party/insuring-party.component';
import { LoginComponent } from './components/login/login.component';
import { MTPLCalculatorComponent } from './components/tab/mtpl-calculator/mtpl-calculator.component';
import { MTPLPolicyComponent } from './components/tab/mtpl-policy/mtpl-policy.component';
import { PaymentComponent } from './components/tab/mtpl-policy/Steps/payment/payment.component';
import { PersonalDetailsComponent } from './components/tab/mtpl-policy/Steps/personal-details/personal-details.component';
import { PolicyDetailsComponent } from './components/tab/mtpl-calculator/Steps/policy-details/policy-details.component';
import { SummaryComponent } from './components/tab/mtpl-policy/Steps/summary/summary.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { VehicleInformationComponent } from './components/tab/mtpl-calculator/Steps/vehicle-information/vehicle-information.component';
import { VehicleOwnerComponent } from './components/tab/mtpl-policy/Steps/vehicle-owner/vehicle-owner.component';
import { LoggedInGuardGuard } from './components/login/_guards/logged-in-guard.guard';
import { TabComponent } from './components/tab/tab.component';
import { MatIconModule } from '@angular/material/icon';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MatRadioModule } from '@angular/material/radio';
import { SocialLoginModule, SocialAuthServiceConfig,GoogleLoginProvider } from 'angularx-social-login';

import { ProgressSpinnerComponent } from './components/shared/progress-spinner/progress-spinner.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AdminComponent } from './components/admin/admin.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {PlatformModule} from '@angular/cdk/platform/index';
import {BidiModule} from '@angular/cdk/bidi/index';
import {A11yModule} from '@angular/cdk/a11y';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { UsersComponent } from './components/admin/users/users.component';
import { BrokerCompanyComponent } from './components/admin/broker-company/broker-company.component';
import { GroupsComponent } from './components/admin/groups/groups.component';
import { ContentComponent } from './components/admin/content/content.component';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import {MatTableModule} from '@angular/material/table';
import { CreateUserComponent } from './components/admin/create-user/create-user.component';
// import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    AdditionalCoversComponent,
    PolicyDetailsComponent,
    LoginComponent,
    VehicleInformationComponent,
    InsuringPartyComponent,
    DeliveryComponent,
    MTPLCalculatorComponent,
    MTPLPolicyComponent,
    PersonalDetailsComponent,
    PaymentComponent,
    InstallmentComponent,
    SummaryComponent,
    VehicleOwnerComponent,
    ContactDetailsComponent,
    SignUpComponent,
    OrdinalPipe,
    ProgressSpinnerComponent,
    AdminComponent,
    DashboardComponent,
    UsersComponent,
    BrokerCompanyComponent,
    GroupsComponent,
    ContentComponent,
    AdminLoginComponent,
    CreateUserComponent
 ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatDividerModule,
    MatGridListModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule,
    MatTabsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDividerModule,
    NgxGoogleAnalyticsModule.forRoot('UA-170099069-1'),
    NgxGoogleAnalyticsRouterModule,
    HttpClientModule,
    MatRadioModule,
    FlexLayoutModule,
    MatIconModule,
    SocialLoginModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatListModule,
    ScrollingModule,
    PlatformModule,
    BidiModule,
    A11yModule,
    MatTableModule
  ],
  providers: [
    CdkStepper,
    MTPLCalculatorComponent,
    LoggedInGuardGuard,
    SummaryComponent,
   {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'primary' },
     },
     {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('183164983832-8lcgnmpj04mqp8cbogdjngmndhllbd7a.apps.googleusercontent.com'),
          },
        ],
      } as SocialAuthServiceConfig,
    } 
  ],
  bootstrap: [AppComponent],
  entryComponents: [ProgressSpinnerComponent],
})
export class AppModule {}
