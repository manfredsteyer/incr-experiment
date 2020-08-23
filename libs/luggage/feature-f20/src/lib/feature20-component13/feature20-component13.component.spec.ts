import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature20Component13Component } from './feature20-component13.component';

describe('Feature20Component13Component', () => {
  let component: Feature20Component13Component;
  let fixture: ComponentFixture<Feature20Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature20Component13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature20Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
