import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature81Component20Component } from './feature81-component20.component';

describe('Feature81Component20Component', () => {
  let component: Feature81Component20Component;
  let fixture: ComponentFixture<Feature81Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature81Component20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature81Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
