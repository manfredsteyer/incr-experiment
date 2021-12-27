import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature84Component10Component } from './feature84-component10.component';

describe('Feature84Component10Component', () => {
  let component: Feature84Component10Component;
  let fixture: ComponentFixture<Feature84Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature84Component10Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature84Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
