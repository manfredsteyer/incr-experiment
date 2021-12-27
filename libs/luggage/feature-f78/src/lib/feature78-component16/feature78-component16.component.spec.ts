import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature78Component16Component } from './feature78-component16.component';

describe('Feature78Component16Component', () => {
  let component: Feature78Component16Component;
  let fixture: ComponentFixture<Feature78Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature78Component16Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature78Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
