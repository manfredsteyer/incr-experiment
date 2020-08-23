import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature21Component18Component } from './feature21-component18.component';

describe('Feature21Component18Component', () => {
  let component: Feature21Component18Component;
  let fixture: ComponentFixture<Feature21Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature21Component18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature21Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
