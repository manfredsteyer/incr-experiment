import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature81Component0Component } from './feature81-component0.component';

describe('Feature81Component0Component', () => {
  let component: Feature81Component0Component;
  let fixture: ComponentFixture<Feature81Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature81Component0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature81Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});