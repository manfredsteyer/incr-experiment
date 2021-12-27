import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature94Component16Component } from './feature94-component16.component';

describe('Feature94Component16Component', () => {
  let component: Feature94Component16Component;
  let fixture: ComponentFixture<Feature94Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature94Component16Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature94Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
