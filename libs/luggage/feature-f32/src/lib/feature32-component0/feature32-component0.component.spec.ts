import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature32Component0Component } from './feature32-component0.component';

describe('Feature32Component0Component', () => {
  let component: Feature32Component0Component;
  let fixture: ComponentFixture<Feature32Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature32Component0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature32Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
