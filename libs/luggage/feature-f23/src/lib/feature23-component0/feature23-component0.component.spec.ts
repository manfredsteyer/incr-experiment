import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature23Component0Component } from './feature23-component0.component';

describe('Feature23Component0Component', () => {
  let component: Feature23Component0Component;
  let fixture: ComponentFixture<Feature23Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature23Component0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature23Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
