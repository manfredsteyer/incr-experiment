import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature19Component14Component } from './feature19-component14.component';

describe('Feature19Component14Component', () => {
  let component: Feature19Component14Component;
  let fixture: ComponentFixture<Feature19Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature19Component14Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature19Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
