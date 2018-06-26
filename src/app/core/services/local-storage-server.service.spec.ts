import { TestBed, inject } from '@angular/core/testing';

import { LocalStorageServerService } from './local-storage-server.service';

describe('ServerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalStorageServerService]
    });
  });

  it('should be created', inject([LocalStorageServerService], (service: LocalStorageServerService) => {
    expect(service).toBeTruthy();
  }));
});
