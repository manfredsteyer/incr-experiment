import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature94Component29Component } from './feature94-component29.component';

describe('Feature94Component29Component', () => {
  let component: Feature94Component29Component;
  let fixture: ComponentFixture<Feature94Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature94Component29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature94Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});