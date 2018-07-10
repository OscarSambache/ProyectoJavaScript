import { TestBed, async, inject } from '@angular/core/testing';

import { InicioGuard } from './inicio.guard';

describe('InicioGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InicioGuard]
    });
  });

  it('should ...', inject([InicioGuard], (guard: InicioGuard) => {
    expect(guard).toBeTruthy();
  }));
});
