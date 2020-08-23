import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature76Component7Component } from './feature76-component7.component';

describe('Feature76Component7Component', () => {
  let component: Feature76Component7Component;
  let fixture: ComponentFixture<Feature76Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature76Component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature76Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
