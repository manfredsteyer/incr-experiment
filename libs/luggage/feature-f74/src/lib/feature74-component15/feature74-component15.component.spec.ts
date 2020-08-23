import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature74Component15Component } from './feature74-component15.component';

describe('Feature74Component15Component', () => {
  let component: Feature74Component15Component;
  let fixture: ComponentFixture<Feature74Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature74Component15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature74Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
