import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature46Component0Component } from './feature46-component0.component';

describe('Feature46Component0Component', () => {
  let component: Feature46Component0Component;
  let fixture: ComponentFixture<Feature46Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature46Component0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature46Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
