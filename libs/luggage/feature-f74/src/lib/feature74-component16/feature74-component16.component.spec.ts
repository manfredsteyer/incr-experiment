import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature74Component16Component } from './feature74-component16.component';

describe('Feature74Component16Component', () => {
  let component: Feature74Component16Component;
  let fixture: ComponentFixture<Feature74Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature74Component16Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature74Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
