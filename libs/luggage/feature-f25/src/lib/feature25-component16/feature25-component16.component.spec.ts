import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature25Component16Component } from './feature25-component16.component';

describe('Feature25Component16Component', () => {
  let component: Feature25Component16Component;
  let fixture: ComponentFixture<Feature25Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature25Component16Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature25Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
