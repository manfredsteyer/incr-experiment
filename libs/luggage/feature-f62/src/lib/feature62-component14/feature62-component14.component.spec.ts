import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature62Component14Component } from './feature62-component14.component';

describe('Feature62Component14Component', () => {
  let component: Feature62Component14Component;
  let fixture: ComponentFixture<Feature62Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature62Component14Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature62Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
