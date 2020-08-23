import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature3Component28Component } from './feature3-component28.component';

describe('Feature3Component28Component', () => {
  let component: Feature3Component28Component;
  let fixture: ComponentFixture<Feature3Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature3Component28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature3Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
