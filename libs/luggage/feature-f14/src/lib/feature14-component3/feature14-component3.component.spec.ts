import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature14Component3Component } from './feature14-component3.component';

describe('Feature14Component3Component', () => {
  let component: Feature14Component3Component;
  let fixture: ComponentFixture<Feature14Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature14Component3Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature14Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
