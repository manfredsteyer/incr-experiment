import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature82Component16Component } from './feature82-component16.component';

describe('Feature82Component16Component', () => {
  let component: Feature82Component16Component;
  let fixture: ComponentFixture<Feature82Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature82Component16Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature82Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
