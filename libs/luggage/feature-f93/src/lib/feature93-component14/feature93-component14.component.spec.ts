import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature93Component14Component } from './feature93-component14.component';

describe('Feature93Component14Component', () => {
  let component: Feature93Component14Component;
  let fixture: ComponentFixture<Feature93Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature93Component14Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature93Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
