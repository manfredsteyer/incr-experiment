import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature56Component18Component } from './feature56-component18.component';

describe('Feature56Component18Component', () => {
  let component: Feature56Component18Component;
  let fixture: ComponentFixture<Feature56Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature56Component18Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature56Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
