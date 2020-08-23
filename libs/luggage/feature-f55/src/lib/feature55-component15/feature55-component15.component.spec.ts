import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature55Component15Component } from './feature55-component15.component';

describe('Feature55Component15Component', () => {
  let component: Feature55Component15Component;
  let fixture: ComponentFixture<Feature55Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature55Component15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature55Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
