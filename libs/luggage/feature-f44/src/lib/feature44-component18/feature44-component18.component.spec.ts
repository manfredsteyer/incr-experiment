import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature44Component18Component } from './feature44-component18.component';

describe('Feature44Component18Component', () => {
  let component: Feature44Component18Component;
  let fixture: ComponentFixture<Feature44Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature44Component18Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature44Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
