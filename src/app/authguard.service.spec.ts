import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthguardService } from './authguard.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthguardService', () => {
  let service: AuthguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,RouterTestingModule],
    });
    service = TestBed.inject(AuthguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
