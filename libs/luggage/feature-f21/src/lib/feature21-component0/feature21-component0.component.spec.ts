import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature21Component0Component } from './feature21-component0.component';

describe('Feature21Component0Component', () => {
  let component: Feature21Component0Component;
  let fixture: ComponentFixture<Feature21Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature21Component0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature21Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
