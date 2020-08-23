import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature19Component2Component } from './feature19-component2.component';

describe('Feature19Component2Component', () => {
  let component: Feature19Component2Component;
  let fixture: ComponentFixture<Feature19Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature19Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature19Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
