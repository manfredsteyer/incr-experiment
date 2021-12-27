import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature82Component18Component } from './feature82-component18.component';

describe('Feature82Component18Component', () => {
  let component: Feature82Component18Component;
  let fixture: ComponentFixture<Feature82Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature82Component18Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature82Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
