import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature58Component16Component } from './feature58-component16.component';

describe('Feature58Component16Component', () => {
  let component: Feature58Component16Component;
  let fixture: ComponentFixture<Feature58Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature58Component16Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature58Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
