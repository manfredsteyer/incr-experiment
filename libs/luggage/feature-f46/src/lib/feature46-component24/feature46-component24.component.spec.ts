import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature46Component24Component } from './feature46-component24.component';

describe('Feature46Component24Component', () => {
  let component: Feature46Component24Component;
  let fixture: ComponentFixture<Feature46Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature46Component24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature46Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});