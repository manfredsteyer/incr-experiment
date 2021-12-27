import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature73Component16Component } from './feature73-component16.component';

describe('Feature73Component16Component', () => {
  let component: Feature73Component16Component;
  let fixture: ComponentFixture<Feature73Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature73Component16Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature73Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
