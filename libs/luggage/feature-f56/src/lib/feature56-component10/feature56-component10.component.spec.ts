import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature56Component10Component } from './feature56-component10.component';

describe('Feature56Component10Component', () => {
  let component: Feature56Component10Component;
  let fixture: ComponentFixture<Feature56Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature56Component10Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature56Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
