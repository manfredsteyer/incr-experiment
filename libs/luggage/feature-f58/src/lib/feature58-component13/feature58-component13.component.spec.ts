import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature58Component13Component } from './feature58-component13.component';

describe('Feature58Component13Component', () => {
  let component: Feature58Component13Component;
  let fixture: ComponentFixture<Feature58Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature58Component13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature58Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
