import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature33Component10Component } from './feature33-component10.component';

describe('Feature33Component10Component', () => {
  let component: Feature33Component10Component;
  let fixture: ComponentFixture<Feature33Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature33Component10Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature33Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
