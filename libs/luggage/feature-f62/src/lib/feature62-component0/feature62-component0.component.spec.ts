import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature62Component0Component } from './feature62-component0.component';

describe('Feature62Component0Component', () => {
  let component: Feature62Component0Component;
  let fixture: ComponentFixture<Feature62Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature62Component0Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature62Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
