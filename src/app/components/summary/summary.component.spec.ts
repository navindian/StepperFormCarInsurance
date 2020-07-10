import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { ProposalComponent } from './proposal.component';
import { SummaryComponent } from './summary.component'; 

import { ReactiveFormsModule } from '@angular/forms';

describe('ProposalComponent', () => {
  let component: SummaryComponent;
  let fixture: ComponentFixture<SummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SummaryComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
