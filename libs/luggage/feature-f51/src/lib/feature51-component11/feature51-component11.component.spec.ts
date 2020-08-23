import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature51Component11Component } from './feature51-component11.component';

describe('Feature51Component11Component', () => {
  let component: Feature51Component11Component;
  let fixture: ComponentFixture<Feature51Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature51Component11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature51Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
