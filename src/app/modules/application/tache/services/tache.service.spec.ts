import { TestBed } from '@angular/core/testing';

import { TacheService } from './tache.service';
import { HttpClientModule } from '@angular/common/http';

describe('TacheService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ],
  }));

  it('should be created', () => {
    const service: TacheService = TestBed.get(TacheService);
    expect(service).toBeTruthy();
  });
});
