import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature39Component10Component } from './feature39-component10.component';

describe('Feature39Component10Component', () => {
  let component: Feature39Component10Component;
  let fixture: ComponentFixture<Feature39Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature39Component10Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature39Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
