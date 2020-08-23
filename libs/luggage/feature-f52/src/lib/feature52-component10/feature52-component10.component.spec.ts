import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature52Component10Component } from './feature52-component10.component';

describe('Feature52Component10Component', () => {
  let component: Feature52Component10Component;
  let fixture: ComponentFixture<Feature52Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature52Component10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature52Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
