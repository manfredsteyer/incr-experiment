import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature16Component0Component } from './feature16-component0.component';

describe('Feature16Component0Component', () => {
  let component: Feature16Component0Component;
  let fixture: ComponentFixture<Feature16Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature16Component0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature16Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
