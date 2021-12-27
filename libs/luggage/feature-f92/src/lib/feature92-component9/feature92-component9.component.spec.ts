import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature92Component9Component } from './feature92-component9.component';

describe('Feature92Component9Component', () => {
  let component: Feature92Component9Component;
  let fixture: ComponentFixture<Feature92Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature92Component9Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature92Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
