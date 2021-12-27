import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature56Component23Component } from './feature56-component23.component';

describe('Feature56Component23Component', () => {
  let component: Feature56Component23Component;
  let fixture: ComponentFixture<Feature56Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature56Component23Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature56Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
