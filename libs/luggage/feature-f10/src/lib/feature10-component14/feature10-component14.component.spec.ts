import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature10Component14Component } from './feature10-component14.component';

describe('Feature10Component14Component', () => {
  let component: Feature10Component14Component;
  let fixture: ComponentFixture<Feature10Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature10Component14Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature10Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
