import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature93Component18Component } from './feature93-component18.component';

describe('Feature93Component18Component', () => {
  let component: Feature93Component18Component;
  let fixture: ComponentFixture<Feature93Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature93Component18Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature93Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
