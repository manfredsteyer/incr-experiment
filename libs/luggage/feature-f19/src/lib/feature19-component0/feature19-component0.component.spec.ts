import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature19Component0Component } from './feature19-component0.component';

describe('Feature19Component0Component', () => {
  let component: Feature19Component0Component;
  let fixture: ComponentFixture<Feature19Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature19Component0Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature19Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
