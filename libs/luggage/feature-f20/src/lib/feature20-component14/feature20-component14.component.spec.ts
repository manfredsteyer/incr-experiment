import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature20Component14Component } from './feature20-component14.component';

describe('Feature20Component14Component', () => {
  let component: Feature20Component14Component;
  let fixture: ComponentFixture<Feature20Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature20Component14Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature20Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
