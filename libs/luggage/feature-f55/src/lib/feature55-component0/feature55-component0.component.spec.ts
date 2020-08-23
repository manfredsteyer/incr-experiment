import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature55Component0Component } from './feature55-component0.component';

describe('Feature55Component0Component', () => {
  let component: Feature55Component0Component;
  let fixture: ComponentFixture<Feature55Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature55Component0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature55Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
