import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature46Component10Component } from './feature46-component10.component';

describe('Feature46Component10Component', () => {
  let component: Feature46Component10Component;
  let fixture: ComponentFixture<Feature46Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature46Component10Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature46Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
