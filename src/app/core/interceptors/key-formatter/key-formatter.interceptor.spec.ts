import { TestBed } from '@angular/core/testing';

import { KeyFormatterInterceptor } from './key-formatter.interceptor';

describe('KeyFormatterInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      KeyFormatterInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: KeyFormatterInterceptor = TestBed.inject(KeyFormatterInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
