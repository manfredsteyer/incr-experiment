import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature3Component15Component } from './feature3-component15.component';

describe('Feature3Component15Component', () => {
  let component: Feature3Component15Component;
  let fixture: ComponentFixture<Feature3Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature3Component15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature3Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
