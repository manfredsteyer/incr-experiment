import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature93Component16Component } from './feature93-component16.component';

describe('Feature93Component16Component', () => {
  let component: Feature93Component16Component;
  let fixture: ComponentFixture<Feature93Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature93Component16Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature93Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
