import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature17Component23Component } from './feature17-component23.component';

describe('Feature17Component23Component', () => {
  let component: Feature17Component23Component;
  let fixture: ComponentFixture<Feature17Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature17Component23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature17Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
