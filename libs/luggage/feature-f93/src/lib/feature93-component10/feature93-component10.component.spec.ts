import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature93Component10Component } from './feature93-component10.component';

describe('Feature93Component10Component', () => {
  let component: Feature93Component10Component;
  let fixture: ComponentFixture<Feature93Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature93Component10Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature93Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
