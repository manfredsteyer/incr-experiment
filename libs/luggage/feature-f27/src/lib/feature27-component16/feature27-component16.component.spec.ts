import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature27Component16Component } from './feature27-component16.component';

describe('Feature27Component16Component', () => {
  let component: Feature27Component16Component;
  let fixture: ComponentFixture<Feature27Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature27Component16Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature27Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
