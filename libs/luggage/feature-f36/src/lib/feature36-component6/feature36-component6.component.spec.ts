import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature36Component6Component } from './feature36-component6.component';

describe('Feature36Component6Component', () => {
  let component: Feature36Component6Component;
  let fixture: ComponentFixture<Feature36Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature36Component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature36Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
