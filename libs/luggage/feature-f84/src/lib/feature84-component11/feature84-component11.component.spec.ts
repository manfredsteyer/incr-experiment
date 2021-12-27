import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature84Component11Component } from './feature84-component11.component';

describe('Feature84Component11Component', () => {
  let component: Feature84Component11Component;
  let fixture: ComponentFixture<Feature84Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature84Component11Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature84Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
