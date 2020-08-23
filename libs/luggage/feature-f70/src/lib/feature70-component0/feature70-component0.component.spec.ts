import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature70Component0Component } from './feature70-component0.component';

describe('Feature70Component0Component', () => {
  let component: Feature70Component0Component;
  let fixture: ComponentFixture<Feature70Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature70Component0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature70Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
