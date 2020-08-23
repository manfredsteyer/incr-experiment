import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature85Component23Component } from './feature85-component23.component';

describe('Feature85Component23Component', () => {
  let component: Feature85Component23Component;
  let fixture: ComponentFixture<Feature85Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature85Component23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature85Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
