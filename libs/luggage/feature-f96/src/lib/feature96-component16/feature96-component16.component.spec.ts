import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature96Component16Component } from './feature96-component16.component';

describe('Feature96Component16Component', () => {
  let component: Feature96Component16Component;
  let fixture: ComponentFixture<Feature96Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature96Component16Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature96Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
