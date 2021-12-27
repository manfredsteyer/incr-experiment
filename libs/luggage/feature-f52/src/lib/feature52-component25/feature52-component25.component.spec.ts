import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature52Component25Component } from './feature52-component25.component';

describe('Feature52Component25Component', () => {
  let component: Feature52Component25Component;
  let fixture: ComponentFixture<Feature52Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature52Component25Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature52Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
