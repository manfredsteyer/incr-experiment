import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature2Component11Component } from './feature2-component11.component';

describe('Feature2Component11Component', () => {
  let component: Feature2Component11Component;
  let fixture: ComponentFixture<Feature2Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature2Component11Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature2Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
