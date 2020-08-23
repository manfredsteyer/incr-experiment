import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature57Component28Component } from './feature57-component28.component';

describe('Feature57Component28Component', () => {
  let component: Feature57Component28Component;
  let fixture: ComponentFixture<Feature57Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature57Component28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature57Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
