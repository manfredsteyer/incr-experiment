import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature94Component11Component } from './feature94-component11.component';

describe('Feature94Component11Component', () => {
  let component: Feature94Component11Component;
  let fixture: ComponentFixture<Feature94Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature94Component11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature94Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
