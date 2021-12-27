import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature77Component16Component } from './feature77-component16.component';

describe('Feature77Component16Component', () => {
  let component: Feature77Component16Component;
  let fixture: ComponentFixture<Feature77Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature77Component16Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature77Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
