import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { BrowserModule, By } from '@angular/platform-browser';
import { MatRadioModule } from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PolicyDetailsComponent } from './policy-details.component';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

describe('PolicyDetailsComponent', () => {
  let component: PolicyDetailsComponent;
  let fixture: ComponentFixture<PolicyDetailsComponent>;
  let de: DebugElement;
  let el:HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PolicyDetailsComponent],
      
      imports: [ReactiveFormsModule,
                MatSelectModule,
                BrowserModule,
                MatRadioModule,
                MatInputModule,
                BrowserAnimationsModule,
                MatCheckboxModule],

      providers : [GoogleAnalyticsService]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(PolicyDetailsComponent);
      component = fixture.componentInstance;
      de = fixture.debugElement.query(By.css('form'));
      el = de.nativeElement;
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid', async(() => {
    component.registerForm.controls.policyDate.setValue('');
    component.registerForm.controls.policyLength.setValue('');
    component.registerForm.controls.check1.setValue('');
    component.registerForm.controls.check2.setValue('');
    expect(component.registerForm.valid).toBeFalsy();
  }));

  it('form should be valid', async(() => {
    component.registerForm.controls.policyDate.setValue(new Date('Jan 10, 2021'));
    component.registerForm.controls.policyLength.setValue('3 months');
    component.registerForm.controls.check1.setValue(true);
    component.registerForm.controls.check2.setValue(true);
    expect(component.registerForm.valid).toBeTruthy();
  }));

  it('should initialise the submit function on valid form', async(() => {
    let mockSpy = spyOn(component.Submission, 'emit');
    component.registerForm.controls.policyDate.setValue(new Date('Jan 10, 2021'));
    component.registerForm.controls.policyLength.setValue('3 months');
    component.registerForm.controls.check1.setValue(true);
    component.registerForm.controls.check2.setValue(true);
    component.submit();
    expect(mockSpy).toHaveBeenCalledWith('Policy Details form is submitted!');
    
  }));
});
