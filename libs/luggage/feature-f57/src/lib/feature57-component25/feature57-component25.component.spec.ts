import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature57Component25Component } from './feature57-component25.component';

describe('Feature57Component25Component', () => {
  let component: Feature57Component25Component;
  let fixture: ComponentFixture<Feature57Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature57Component25Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature57Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
