import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature41Component16Component } from './feature41-component16.component';

describe('Feature41Component16Component', () => {
  let component: Feature41Component16Component;
  let fixture: ComponentFixture<Feature41Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature41Component16Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature41Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
