import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature85Component14Component } from './feature85-component14.component';

describe('Feature85Component14Component', () => {
  let component: Feature85Component14Component;
  let fixture: ComponentFixture<Feature85Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature85Component14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature85Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
