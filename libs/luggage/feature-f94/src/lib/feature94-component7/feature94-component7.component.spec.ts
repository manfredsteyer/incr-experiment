import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature94Component7Component } from './feature94-component7.component';

describe('Feature94Component7Component', () => {
  let component: Feature94Component7Component;
  let fixture: ComponentFixture<Feature94Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature94Component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature94Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
