import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature50Component11Component } from './feature50-component11.component';

describe('Feature50Component11Component', () => {
  let component: Feature50Component11Component;
  let fixture: ComponentFixture<Feature50Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature50Component11Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature50Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
