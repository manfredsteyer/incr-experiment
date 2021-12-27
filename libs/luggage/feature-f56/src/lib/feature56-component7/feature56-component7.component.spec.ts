import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature56Component7Component } from './feature56-component7.component';

describe('Feature56Component7Component', () => {
  let component: Feature56Component7Component;
  let fixture: ComponentFixture<Feature56Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature56Component7Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature56Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
