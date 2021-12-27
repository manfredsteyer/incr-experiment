import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature19Component1Component } from './feature19-component1.component';

describe('Feature19Component1Component', () => {
  let component: Feature19Component1Component;
  let fixture: ComponentFixture<Feature19Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature19Component1Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature19Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
