import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature94Component6Component } from './feature94-component6.component';

describe('Feature94Component6Component', () => {
  let component: Feature94Component6Component;
  let fixture: ComponentFixture<Feature94Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature94Component6Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature94Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
