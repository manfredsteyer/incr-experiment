import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature27Component13Component } from './feature27-component13.component';

describe('Feature27Component13Component', () => {
  let component: Feature27Component13Component;
  let fixture: ComponentFixture<Feature27Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature27Component13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature27Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
