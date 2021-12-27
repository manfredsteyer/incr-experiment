import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature53Component16Component } from './feature53-component16.component';

describe('Feature53Component16Component', () => {
  let component: Feature53Component16Component;
  let fixture: ComponentFixture<Feature53Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature53Component16Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature53Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
