import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature88Component6Component } from './feature88-component6.component';

describe('Feature88Component6Component', () => {
  let component: Feature88Component6Component;
  let fixture: ComponentFixture<Feature88Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature88Component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature88Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
