import { TestBed } from '@angular/core/testing';

import { LocalSettingsService } from './local-settings.service';

describe('LocalSettingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocalSettingsService = TestBed.get(LocalSettingsService);
    expect(service).toBeTruthy();
  });
});
