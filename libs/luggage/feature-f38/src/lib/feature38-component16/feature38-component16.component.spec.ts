import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature38Component16Component } from './feature38-component16.component';

describe('Feature38Component16Component', () => {
  let component: Feature38Component16Component;
  let fixture: ComponentFixture<Feature38Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature38Component16Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature38Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
