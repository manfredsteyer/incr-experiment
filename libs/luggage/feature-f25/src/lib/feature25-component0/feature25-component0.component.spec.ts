import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature25Component0Component } from './feature25-component0.component';

describe('Feature25Component0Component', () => {
  let component: Feature25Component0Component;
  let fixture: ComponentFixture<Feature25Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature25Component0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature25Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
