import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature10Component10Component } from './feature10-component10.component';

describe('Feature10Component10Component', () => {
  let component: Feature10Component10Component;
  let fixture: ComponentFixture<Feature10Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature10Component10Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature10Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
