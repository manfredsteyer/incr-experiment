import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature46Component11Component } from './feature46-component11.component';

describe('Feature46Component11Component', () => {
  let component: Feature46Component11Component;
  let fixture: ComponentFixture<Feature46Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature46Component11Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature46Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
