import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature3Component29Component } from './feature3-component29.component';

describe('Feature3Component29Component', () => {
  let component: Feature3Component29Component;
  let fixture: ComponentFixture<Feature3Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature3Component29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature3Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
