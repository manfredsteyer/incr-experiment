import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature58Component18Component } from './feature58-component18.component';

describe('Feature58Component18Component', () => {
  let component: Feature58Component18Component;
  let fixture: ComponentFixture<Feature58Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature58Component18Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature58Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
