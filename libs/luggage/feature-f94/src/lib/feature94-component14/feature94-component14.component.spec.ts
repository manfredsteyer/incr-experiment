import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature94Component14Component } from './feature94-component14.component';

describe('Feature94Component14Component', () => {
  let component: Feature94Component14Component;
  let fixture: ComponentFixture<Feature94Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature94Component14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature94Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
