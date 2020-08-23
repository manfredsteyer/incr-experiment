import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature14Component8Component } from './feature14-component8.component';

describe('Feature14Component8Component', () => {
  let component: Feature14Component8Component;
  let fixture: ComponentFixture<Feature14Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature14Component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature14Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
