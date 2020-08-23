import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature46Component6Component } from './feature46-component6.component';

describe('Feature46Component6Component', () => {
  let component: Feature46Component6Component;
  let fixture: ComponentFixture<Feature46Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature46Component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature46Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
