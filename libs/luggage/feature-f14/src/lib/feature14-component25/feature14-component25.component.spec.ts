import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature14Component25Component } from './feature14-component25.component';

describe('Feature14Component25Component', () => {
  let component: Feature14Component25Component;
  let fixture: ComponentFixture<Feature14Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature14Component25Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature14Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
