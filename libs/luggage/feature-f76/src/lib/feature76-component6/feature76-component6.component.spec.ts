import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature76Component6Component } from './feature76-component6.component';

describe('Feature76Component6Component', () => {
  let component: Feature76Component6Component;
  let fixture: ComponentFixture<Feature76Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature76Component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature76Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
