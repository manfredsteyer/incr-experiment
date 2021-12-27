import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature56Component0Component } from './feature56-component0.component';

describe('Feature56Component0Component', () => {
  let component: Feature56Component0Component;
  let fixture: ComponentFixture<Feature56Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature56Component0Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature56Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
