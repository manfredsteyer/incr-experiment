import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature15Component11Component } from './feature15-component11.component';

describe('Feature15Component11Component', () => {
  let component: Feature15Component11Component;
  let fixture: ComponentFixture<Feature15Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature15Component11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature15Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
