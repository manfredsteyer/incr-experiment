import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature82Component0Component } from './feature82-component0.component';

describe('Feature82Component0Component', () => {
  let component: Feature82Component0Component;
  let fixture: ComponentFixture<Feature82Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature82Component0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature82Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
