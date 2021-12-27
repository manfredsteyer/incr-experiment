import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature56Component21Component } from './feature56-component21.component';

describe('Feature56Component21Component', () => {
  let component: Feature56Component21Component;
  let fixture: ComponentFixture<Feature56Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature56Component21Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature56Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
