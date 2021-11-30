import { TestBed } from '@angular/core/testing';

import { SiblingCommunicationService } from './sibling-communication.service';

describe('SiblingCommunicationService', () => {
  let service: SiblingCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiblingCommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
