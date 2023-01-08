import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FetchBooksService } from './fetch-books.service';

describe('FetchBooksService', () => {
  let service: FetchBooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
    });
    service = TestBed.inject(FetchBooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
