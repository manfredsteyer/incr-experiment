import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature17Component6Component } from './feature17-component6.component';

describe('Feature17Component6Component', () => {
  let component: Feature17Component6Component;
  let fixture: ComponentFixture<Feature17Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature17Component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature17Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
