import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature73Component11Component } from './feature73-component11.component';

describe('Feature73Component11Component', () => {
  let component: Feature73Component11Component;
  let fixture: ComponentFixture<Feature73Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature73Component11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature73Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
