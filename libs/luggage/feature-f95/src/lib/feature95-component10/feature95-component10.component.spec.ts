import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature95Component10Component } from './feature95-component10.component';

describe('Feature95Component10Component', () => {
  let component: Feature95Component10Component;
  let fixture: ComponentFixture<Feature95Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature95Component10Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature95Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
