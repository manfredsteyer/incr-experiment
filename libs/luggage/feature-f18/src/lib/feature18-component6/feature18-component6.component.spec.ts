import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature18Component6Component } from './feature18-component6.component';

describe('Feature18Component6Component', () => {
  let component: Feature18Component6Component;
  let fixture: ComponentFixture<Feature18Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature18Component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature18Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
