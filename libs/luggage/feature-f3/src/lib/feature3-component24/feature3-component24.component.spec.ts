import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature3Component24Component } from './feature3-component24.component';

describe('Feature3Component24Component', () => {
  let component: Feature3Component24Component;
  let fixture: ComponentFixture<Feature3Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature3Component24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature3Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
