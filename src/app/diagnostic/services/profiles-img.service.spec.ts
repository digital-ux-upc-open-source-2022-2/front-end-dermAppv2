import { TestBed } from '@angular/core/testing';

import { ProfilesImgService } from './profiles-img.service';

describe('ProfilesImgService', () => {
  let service: ProfilesImgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfilesImgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
