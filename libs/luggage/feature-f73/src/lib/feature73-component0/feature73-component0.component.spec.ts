import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature73Component0Component } from './feature73-component0.component';

describe('Feature73Component0Component', () => {
  let component: Feature73Component0Component;
  let fixture: ComponentFixture<Feature73Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature73Component0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature73Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
