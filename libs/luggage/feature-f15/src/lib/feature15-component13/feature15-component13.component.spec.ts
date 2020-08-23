import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature15Component13Component } from './feature15-component13.component';

describe('Feature15Component13Component', () => {
  let component: Feature15Component13Component;
  let fixture: ComponentFixture<Feature15Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature15Component13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature15Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
