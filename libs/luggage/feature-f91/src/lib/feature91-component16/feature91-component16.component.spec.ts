import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature91Component16Component } from './feature91-component16.component';

describe('Feature91Component16Component', () => {
  let component: Feature91Component16Component;
  let fixture: ComponentFixture<Feature91Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature91Component16Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature91Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
