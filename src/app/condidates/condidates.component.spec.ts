import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CondidatesComponent } from './condidates.component';

describe('CondidatesComponent', () => {
  let component: CondidatesComponent;
  let fixture: ComponentFixture<CondidatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondidatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
