import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature62Component20Component } from './feature62-component20.component';

describe('Feature62Component20Component', () => {
  let component: Feature62Component20Component;
  let fixture: ComponentFixture<Feature62Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature62Component20Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature62Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
