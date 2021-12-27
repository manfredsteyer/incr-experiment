import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature46Component16Component } from './feature46-component16.component';

describe('Feature46Component16Component', () => {
  let component: Feature46Component16Component;
  let fixture: ComponentFixture<Feature46Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature46Component16Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature46Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
