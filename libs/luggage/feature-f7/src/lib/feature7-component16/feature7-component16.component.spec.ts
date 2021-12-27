import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature7Component16Component } from './feature7-component16.component';

describe('Feature7Component16Component', () => {
  let component: Feature7Component16Component;
  let fixture: ComponentFixture<Feature7Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature7Component16Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature7Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
