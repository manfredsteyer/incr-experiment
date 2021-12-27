import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature21Component6Component } from './feature21-component6.component';

describe('Feature21Component6Component', () => {
  let component: Feature21Component6Component;
  let fixture: ComponentFixture<Feature21Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature21Component6Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature21Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
