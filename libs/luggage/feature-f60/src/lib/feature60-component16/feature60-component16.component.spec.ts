import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature60Component16Component } from './feature60-component16.component';

describe('Feature60Component16Component', () => {
  let component: Feature60Component16Component;
  let fixture: ComponentFixture<Feature60Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature60Component16Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature60Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
