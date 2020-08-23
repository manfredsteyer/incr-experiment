import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature85Component18Component } from './feature85-component18.component';

describe('Feature85Component18Component', () => {
  let component: Feature85Component18Component;
  let fixture: ComponentFixture<Feature85Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature85Component18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature85Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
