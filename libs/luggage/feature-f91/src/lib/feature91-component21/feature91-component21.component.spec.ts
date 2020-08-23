import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature91Component21Component } from './feature91-component21.component';

describe('Feature91Component21Component', () => {
  let component: Feature91Component21Component;
  let fixture: ComponentFixture<Feature91Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature91Component21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature91Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
