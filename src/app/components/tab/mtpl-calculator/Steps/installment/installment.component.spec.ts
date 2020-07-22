import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { InstallmentComponent } from './installment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule, By } from '@angular/platform-browser';
import { MatRadioModule } from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('InstallmentComponent', () => {
  let component: InstallmentComponent;
  let fixture: ComponentFixture<InstallmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InstallmentComponent],
      imports: [ReactiveFormsModule, 
                RouterTestingModule, 
                HttpClientModule,
                MatSelectModule,
                BrowserModule,
                MatRadioModule,
                MatInputModule,
                BrowserAnimationsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
