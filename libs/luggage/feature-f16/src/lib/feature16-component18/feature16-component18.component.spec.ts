import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature16Component18Component } from './feature16-component18.component';

describe('Feature16Component18Component', () => {
  let component: Feature16Component18Component;
  let fixture: ComponentFixture<Feature16Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature16Component18Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature16Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
