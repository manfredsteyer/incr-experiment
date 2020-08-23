import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature85Component11Component } from './feature85-component11.component';

describe('Feature85Component11Component', () => {
  let component: Feature85Component11Component;
  let fixture: ComponentFixture<Feature85Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature85Component11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature85Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
