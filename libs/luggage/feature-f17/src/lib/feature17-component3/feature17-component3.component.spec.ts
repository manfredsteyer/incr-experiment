import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature17Component3Component } from './feature17-component3.component';

describe('Feature17Component3Component', () => {
  let component: Feature17Component3Component;
  let fixture: ComponentFixture<Feature17Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature17Component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature17Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
