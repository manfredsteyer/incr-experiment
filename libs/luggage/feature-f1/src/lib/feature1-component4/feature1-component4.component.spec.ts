import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature1Component4Component } from './feature1-component4.component';

describe('Feature1Component4Component', () => {
  let component: Feature1Component4Component;
  let fixture: ComponentFixture<Feature1Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature1Component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature1Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
