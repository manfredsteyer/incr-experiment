import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature56Component9Component } from './feature56-component9.component';

describe('Feature56Component9Component', () => {
  let component: Feature56Component9Component;
  let fixture: ComponentFixture<Feature56Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature56Component9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature56Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
