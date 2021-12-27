import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature90Component18Component } from './feature90-component18.component';

describe('Feature90Component18Component', () => {
  let component: Feature90Component18Component;
  let fixture: ComponentFixture<Feature90Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature90Component18Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature90Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
