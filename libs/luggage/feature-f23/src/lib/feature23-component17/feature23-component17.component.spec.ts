import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature23Component17Component } from './feature23-component17.component';

describe('Feature23Component17Component', () => {
  let component: Feature23Component17Component;
  let fixture: ComponentFixture<Feature23Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature23Component17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature23Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
