import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature64Component0Component } from './feature64-component0.component';

describe('Feature64Component0Component', () => {
  let component: Feature64Component0Component;
  let fixture: ComponentFixture<Feature64Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature64Component0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature64Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
