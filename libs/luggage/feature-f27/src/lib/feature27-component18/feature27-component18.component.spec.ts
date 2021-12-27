import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature27Component18Component } from './feature27-component18.component';

describe('Feature27Component18Component', () => {
  let component: Feature27Component18Component;
  let fixture: ComponentFixture<Feature27Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature27Component18Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature27Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
