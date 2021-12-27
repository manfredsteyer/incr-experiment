import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature67Component16Component } from './feature67-component16.component';

describe('Feature67Component16Component', () => {
  let component: Feature67Component16Component;
  let fixture: ComponentFixture<Feature67Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature67Component16Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature67Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
