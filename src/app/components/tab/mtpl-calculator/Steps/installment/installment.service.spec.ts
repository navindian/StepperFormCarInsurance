import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { InstallmentService } from './installment.service';

describe('InstallmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }).compileComponents());

  it('should be created', () => {
    const service: InstallmentService = TestBed.inject(InstallmentService);
    expect(service).toBeTruthy();
  });
});
