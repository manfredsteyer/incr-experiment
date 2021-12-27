import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature62Component10Component } from './feature62-component10.component';

describe('Feature62Component10Component', () => {
  let component: Feature62Component10Component;
  let fixture: ComponentFixture<Feature62Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature62Component10Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature62Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
