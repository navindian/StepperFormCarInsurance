import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { MtplPolicyService } from './mtpl-policy.service';

describe('MtplPolicyService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: MtplPolicyService = TestBed.get(MtplPolicyService);
    expect(service).toBeTruthy();
  });
});
