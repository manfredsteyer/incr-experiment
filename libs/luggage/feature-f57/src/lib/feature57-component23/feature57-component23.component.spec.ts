import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature57Component23Component } from './feature57-component23.component';

describe('Feature57Component23Component', () => {
  let component: Feature57Component23Component;
  let fixture: ComponentFixture<Feature57Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature57Component23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature57Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
