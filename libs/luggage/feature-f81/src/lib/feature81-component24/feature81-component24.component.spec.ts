import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature81Component24Component } from './feature81-component24.component';

describe('Feature81Component24Component', () => {
  let component: Feature81Component24Component;
  let fixture: ComponentFixture<Feature81Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature81Component24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature81Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});