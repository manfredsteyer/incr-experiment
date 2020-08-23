import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature46Component7Component } from './feature46-component7.component';

describe('Feature46Component7Component', () => {
  let component: Feature46Component7Component;
  let fixture: ComponentFixture<Feature46Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature46Component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature46Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
