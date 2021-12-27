import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature92Component20Component } from './feature92-component20.component';

describe('Feature92Component20Component', () => {
  let component: Feature92Component20Component;
  let fixture: ComponentFixture<Feature92Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature92Component20Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature92Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
