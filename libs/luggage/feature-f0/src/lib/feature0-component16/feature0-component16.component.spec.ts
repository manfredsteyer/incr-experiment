import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature0Component16Component } from './feature0-component16.component';

describe('Feature0Component16Component', () => {
  let component: Feature0Component16Component;
  let fixture: ComponentFixture<Feature0Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature0Component16Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature0Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
