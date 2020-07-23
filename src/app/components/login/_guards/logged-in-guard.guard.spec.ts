import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { LoggedInGuardGuard } from './logged-in-guard.guard';

describe('LoggedInGuardGuard', () => {
  let guard: LoggedInGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([])]
    });
    guard = TestBed.inject(LoggedInGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
