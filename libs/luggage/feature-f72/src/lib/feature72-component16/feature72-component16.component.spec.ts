import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature72Component16Component } from './feature72-component16.component';

describe('Feature72Component16Component', () => {
  let component: Feature72Component16Component;
  let fixture: ComponentFixture<Feature72Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature72Component16Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature72Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
