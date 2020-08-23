import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature85Component0Component } from './feature85-component0.component';

describe('Feature85Component0Component', () => {
  let component: Feature85Component0Component;
  let fixture: ComponentFixture<Feature85Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature85Component0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature85Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
