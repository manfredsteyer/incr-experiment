import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature3Component5Component } from './feature3-component5.component';

describe('Feature3Component5Component', () => {
  let component: Feature3Component5Component;
  let fixture: ComponentFixture<Feature3Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature3Component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature3Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
