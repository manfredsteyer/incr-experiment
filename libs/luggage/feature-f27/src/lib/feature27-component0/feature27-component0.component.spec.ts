import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature27Component0Component } from './feature27-component0.component';

describe('Feature27Component0Component', () => {
  let component: Feature27Component0Component;
  let fixture: ComponentFixture<Feature27Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature27Component0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature27Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
