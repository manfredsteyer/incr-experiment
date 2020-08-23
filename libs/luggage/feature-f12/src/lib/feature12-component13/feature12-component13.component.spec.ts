import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature12Component13Component } from './feature12-component13.component';

describe('Feature12Component13Component', () => {
  let component: Feature12Component13Component;
  let fixture: ComponentFixture<Feature12Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature12Component13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature12Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
