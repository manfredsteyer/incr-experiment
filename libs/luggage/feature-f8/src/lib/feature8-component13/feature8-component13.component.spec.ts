import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature8Component13Component } from './feature8-component13.component';

describe('Feature8Component13Component', () => {
  let component: Feature8Component13Component;
  let fixture: ComponentFixture<Feature8Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature8Component13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature8Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
