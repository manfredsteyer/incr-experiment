import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature90Component16Component } from './feature90-component16.component';

describe('Feature90Component16Component', () => {
  let component: Feature90Component16Component;
  let fixture: ComponentFixture<Feature90Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature90Component16Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature90Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
