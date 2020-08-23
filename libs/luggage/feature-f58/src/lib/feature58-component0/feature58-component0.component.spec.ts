import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature58Component0Component } from './feature58-component0.component';

describe('Feature58Component0Component', () => {
  let component: Feature58Component0Component;
  let fixture: ComponentFixture<Feature58Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature58Component0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature58Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
