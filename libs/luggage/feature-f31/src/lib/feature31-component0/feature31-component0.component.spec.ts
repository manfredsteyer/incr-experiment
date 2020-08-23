import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature31Component0Component } from './feature31-component0.component';

describe('Feature31Component0Component', () => {
  let component: Feature31Component0Component;
  let fixture: ComponentFixture<Feature31Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature31Component0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature31Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
