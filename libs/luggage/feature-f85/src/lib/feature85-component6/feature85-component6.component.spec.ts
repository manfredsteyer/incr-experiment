import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature85Component6Component } from './feature85-component6.component';

describe('Feature85Component6Component', () => {
  let component: Feature85Component6Component;
  let fixture: ComponentFixture<Feature85Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature85Component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature85Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
