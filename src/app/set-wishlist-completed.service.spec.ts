import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SetWishlistCompletedService } from './set-wishlist-completed.service';

describe('SetWishlistCompletedService', () => {
  let service: SetWishlistCompletedService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
    });
    service = TestBed.inject(SetWishlistCompletedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
