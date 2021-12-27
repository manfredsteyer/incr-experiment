import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature28Component9Component } from './feature28-component9.component';

describe('Feature28Component9Component', () => {
  let component: Feature28Component9Component;
  let fixture: ComponentFixture<Feature28Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature28Component9Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature28Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
