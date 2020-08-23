import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature95Component11Component } from './feature95-component11.component';

describe('Feature95Component11Component', () => {
  let component: Feature95Component11Component;
  let fixture: ComponentFixture<Feature95Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature95Component11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature95Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
