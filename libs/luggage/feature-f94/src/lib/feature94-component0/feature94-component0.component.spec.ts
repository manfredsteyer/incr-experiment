import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature94Component0Component } from './feature94-component0.component';

describe('Feature94Component0Component', () => {
  let component: Feature94Component0Component;
  let fixture: ComponentFixture<Feature94Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature94Component0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature94Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
