import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature98Component15Component } from './feature98-component15.component';

describe('Feature98Component15Component', () => {
  let component: Feature98Component15Component;
  let fixture: ComponentFixture<Feature98Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature98Component15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature98Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
