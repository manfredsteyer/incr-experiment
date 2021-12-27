import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature14Component6Component } from './feature14-component6.component';

describe('Feature14Component6Component', () => {
  let component: Feature14Component6Component;
  let fixture: ComponentFixture<Feature14Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature14Component6Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature14Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
