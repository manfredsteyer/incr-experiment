import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature74Component11Component } from './feature74-component11.component';

describe('Feature74Component11Component', () => {
  let component: Feature74Component11Component;
  let fixture: ComponentFixture<Feature74Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature74Component11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature74Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
