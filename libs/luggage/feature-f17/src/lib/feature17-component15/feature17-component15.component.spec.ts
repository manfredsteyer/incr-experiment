import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature17Component15Component } from './feature17-component15.component';

describe('Feature17Component15Component', () => {
  let component: Feature17Component15Component;
  let fixture: ComponentFixture<Feature17Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature17Component15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature17Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
