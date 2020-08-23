import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature94Component20Component } from './feature94-component20.component';

describe('Feature94Component20Component', () => {
  let component: Feature94Component20Component;
  let fixture: ComponentFixture<Feature94Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature94Component20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature94Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
