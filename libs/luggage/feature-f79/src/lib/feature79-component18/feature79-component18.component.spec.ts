import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature79Component18Component } from './feature79-component18.component';

describe('Feature79Component18Component', () => {
  let component: Feature79Component18Component;
  let fixture: ComponentFixture<Feature79Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature79Component18Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature79Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
