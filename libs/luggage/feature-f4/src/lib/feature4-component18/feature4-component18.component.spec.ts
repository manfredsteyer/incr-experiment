import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature4Component18Component } from './feature4-component18.component';

describe('Feature4Component18Component', () => {
  let component: Feature4Component18Component;
  let fixture: ComponentFixture<Feature4Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature4Component18Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature4Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
