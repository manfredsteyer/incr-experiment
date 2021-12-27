import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature88Component16Component } from './feature88-component16.component';

describe('Feature88Component16Component', () => {
  let component: Feature88Component16Component;
  let fixture: ComponentFixture<Feature88Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature88Component16Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature88Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
