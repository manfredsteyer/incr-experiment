import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature96Component21Component } from './feature96-component21.component';

describe('Feature96Component21Component', () => {
  let component: Feature96Component21Component;
  let fixture: ComponentFixture<Feature96Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature96Component21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature96Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
