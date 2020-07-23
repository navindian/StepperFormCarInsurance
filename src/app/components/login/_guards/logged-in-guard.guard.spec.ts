import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { LoggedInGuardGuard } from './logged-in-guard.guard';
import { APP_BASE_HREF } from '@angular/common';

describe('LoggedInGuardGuard', () => {
  let guard: LoggedInGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([])],
      providers: [ {APP_BASE_HREF, useValue: '/'}]
    });
    guard = TestBed.inject(LoggedInGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
