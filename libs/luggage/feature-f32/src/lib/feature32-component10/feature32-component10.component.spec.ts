import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature32Component10Component } from './feature32-component10.component';

describe('Feature32Component10Component', () => {
  let component: Feature32Component10Component;
  let fixture: ComponentFixture<Feature32Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature32Component10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature32Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});