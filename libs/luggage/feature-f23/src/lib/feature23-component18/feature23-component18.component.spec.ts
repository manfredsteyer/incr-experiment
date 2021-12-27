import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature23Component18Component } from './feature23-component18.component';

describe('Feature23Component18Component', () => {
  let component: Feature23Component18Component;
  let fixture: ComponentFixture<Feature23Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature23Component18Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature23Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
