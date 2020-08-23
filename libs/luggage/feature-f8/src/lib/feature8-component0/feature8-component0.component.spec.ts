import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature8Component0Component } from './feature8-component0.component';

describe('Feature8Component0Component', () => {
  let component: Feature8Component0Component;
  let fixture: ComponentFixture<Feature8Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature8Component0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature8Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
