import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature55Component16Component } from './feature55-component16.component';

describe('Feature55Component16Component', () => {
  let component: Feature55Component16Component;
  let fixture: ComponentFixture<Feature55Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature55Component16Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature55Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
