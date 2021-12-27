import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature89Component16Component } from './feature89-component16.component';

describe('Feature89Component16Component', () => {
  let component: Feature89Component16Component;
  let fixture: ComponentFixture<Feature89Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature89Component16Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature89Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
