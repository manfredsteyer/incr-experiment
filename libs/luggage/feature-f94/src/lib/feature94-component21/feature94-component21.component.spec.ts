import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature94Component21Component } from './feature94-component21.component';

describe('Feature94Component21Component', () => {
  let component: Feature94Component21Component;
  let fixture: ComponentFixture<Feature94Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature94Component21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature94Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
