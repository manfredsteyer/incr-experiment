import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature17Component18Component } from './feature17-component18.component';

describe('Feature17Component18Component', () => {
  let component: Feature17Component18Component;
  let fixture: ComponentFixture<Feature17Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature17Component18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature17Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
