import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature20Component16Component } from './feature20-component16.component';

describe('Feature20Component16Component', () => {
  let component: Feature20Component16Component;
  let fixture: ComponentFixture<Feature20Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature20Component16Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature20Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
