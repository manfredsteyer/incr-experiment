import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature21Component11Component } from './feature21-component11.component';

describe('Feature21Component11Component', () => {
  let component: Feature21Component11Component;
  let fixture: ComponentFixture<Feature21Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature21Component11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature21Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
