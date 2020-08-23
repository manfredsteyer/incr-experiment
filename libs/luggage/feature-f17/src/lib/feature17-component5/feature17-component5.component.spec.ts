import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature17Component5Component } from './feature17-component5.component';

describe('Feature17Component5Component', () => {
  let component: Feature17Component5Component;
  let fixture: ComponentFixture<Feature17Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature17Component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature17Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
