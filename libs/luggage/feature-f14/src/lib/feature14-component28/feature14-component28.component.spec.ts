import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature14Component28Component } from './feature14-component28.component';

describe('Feature14Component28Component', () => {
  let component: Feature14Component28Component;
  let fixture: ComponentFixture<Feature14Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature14Component28Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature14Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
