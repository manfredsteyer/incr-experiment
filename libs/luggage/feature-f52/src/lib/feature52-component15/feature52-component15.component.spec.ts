import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature52Component15Component } from './feature52-component15.component';

describe('Feature52Component15Component', () => {
  let component: Feature52Component15Component;
  let fixture: ComponentFixture<Feature52Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature52Component15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature52Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
