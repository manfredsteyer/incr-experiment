import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature57Component6Component } from './feature57-component6.component';

describe('Feature57Component6Component', () => {
  let component: Feature57Component6Component;
  let fixture: ComponentFixture<Feature57Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature57Component6Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature57Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
