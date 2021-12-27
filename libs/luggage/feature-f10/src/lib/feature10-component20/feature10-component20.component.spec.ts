import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature10Component20Component } from './feature10-component20.component';

describe('Feature10Component20Component', () => {
  let component: Feature10Component20Component;
  let fixture: ComponentFixture<Feature10Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature10Component20Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature10Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
