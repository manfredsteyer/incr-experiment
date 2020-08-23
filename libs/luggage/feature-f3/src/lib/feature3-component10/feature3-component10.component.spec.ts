import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature3Component10Component } from './feature3-component10.component';

describe('Feature3Component10Component', () => {
  let component: Feature3Component10Component;
  let fixture: ComponentFixture<Feature3Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature3Component10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature3Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
