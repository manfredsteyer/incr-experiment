import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature90Component0Component } from './feature90-component0.component';

describe('Feature90Component0Component', () => {
  let component: Feature90Component0Component;
  let fixture: ComponentFixture<Feature90Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature90Component0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature90Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
