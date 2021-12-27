import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature44Component16Component } from './feature44-component16.component';

describe('Feature44Component16Component', () => {
  let component: Feature44Component16Component;
  let fixture: ComponentFixture<Feature44Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature44Component16Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature44Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
