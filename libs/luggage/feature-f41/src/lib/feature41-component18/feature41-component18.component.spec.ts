import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature41Component18Component } from './feature41-component18.component';

describe('Feature41Component18Component', () => {
  let component: Feature41Component18Component;
  let fixture: ComponentFixture<Feature41Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature41Component18Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature41Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
