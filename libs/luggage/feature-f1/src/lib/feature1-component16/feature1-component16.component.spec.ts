import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature1Component16Component } from './feature1-component16.component';

describe('Feature1Component16Component', () => {
  let component: Feature1Component16Component;
  let fixture: ComponentFixture<Feature1Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature1Component16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature1Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
