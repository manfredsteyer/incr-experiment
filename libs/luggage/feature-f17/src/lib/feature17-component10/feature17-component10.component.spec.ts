import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature17Component10Component } from './feature17-component10.component';

describe('Feature17Component10Component', () => {
  let component: Feature17Component10Component;
  let fixture: ComponentFixture<Feature17Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature17Component10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature17Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
