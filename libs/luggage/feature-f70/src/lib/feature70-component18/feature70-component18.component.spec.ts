import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature70Component18Component } from './feature70-component18.component';

describe('Feature70Component18Component', () => {
  let component: Feature70Component18Component;
  let fixture: ComponentFixture<Feature70Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature70Component18Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature70Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
