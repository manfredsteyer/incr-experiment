import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature81Component14Component } from './feature81-component14.component';

describe('Feature81Component14Component', () => {
  let component: Feature81Component14Component;
  let fixture: ComponentFixture<Feature81Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature81Component14Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature81Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
