import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature24Component21Component } from './feature24-component21.component';

describe('Feature24Component21Component', () => {
  let component: Feature24Component21Component;
  let fixture: ComponentFixture<Feature24Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature24Component21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature24Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
