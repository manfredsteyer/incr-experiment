import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature17Component16Component } from './feature17-component16.component';

describe('Feature17Component16Component', () => {
  let component: Feature17Component16Component;
  let fixture: ComponentFixture<Feature17Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature17Component16Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature17Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
