import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature60Component10Component } from './feature60-component10.component';

describe('Feature60Component10Component', () => {
  let component: Feature60Component10Component;
  let fixture: ComponentFixture<Feature60Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature60Component10Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature60Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
