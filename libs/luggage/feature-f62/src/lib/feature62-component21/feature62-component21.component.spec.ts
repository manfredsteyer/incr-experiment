import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature62Component21Component } from './feature62-component21.component';

describe('Feature62Component21Component', () => {
  let component: Feature62Component21Component;
  let fixture: ComponentFixture<Feature62Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature62Component21Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature62Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
