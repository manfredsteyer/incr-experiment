import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature12Component18Component } from './feature12-component18.component';

describe('Feature12Component18Component', () => {
  let component: Feature12Component18Component;
  let fixture: ComponentFixture<Feature12Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature12Component18Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature12Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
