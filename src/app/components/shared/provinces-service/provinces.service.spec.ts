import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ProvincesService } from './provinces.service';

describe('ProvincesService', () => {
  let service: ProvincesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(ProvincesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
