import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature74Component6Component } from './feature74-component6.component';

describe('Feature74Component6Component', () => {
  let component: Feature74Component6Component;
  let fixture: ComponentFixture<Feature74Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature74Component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature74Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
