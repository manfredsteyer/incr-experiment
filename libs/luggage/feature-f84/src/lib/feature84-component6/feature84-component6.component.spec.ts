import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature84Component6Component } from './feature84-component6.component';

describe('Feature84Component6Component', () => {
  let component: Feature84Component6Component;
  let fixture: ComponentFixture<Feature84Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature84Component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature84Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});