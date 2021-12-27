import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature33Component16Component } from './feature33-component16.component';

describe('Feature33Component16Component', () => {
  let component: Feature33Component16Component;
  let fixture: ComponentFixture<Feature33Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature33Component16Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature33Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
