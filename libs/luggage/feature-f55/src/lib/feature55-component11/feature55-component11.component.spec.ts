import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature55Component11Component } from './feature55-component11.component';

describe('Feature55Component11Component', () => {
  let component: Feature55Component11Component;
  let fixture: ComponentFixture<Feature55Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature55Component11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature55Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
