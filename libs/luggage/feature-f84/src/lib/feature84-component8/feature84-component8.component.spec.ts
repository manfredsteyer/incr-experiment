import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature84Component8Component } from './feature84-component8.component';

describe('Feature84Component8Component', () => {
  let component: Feature84Component8Component;
  let fixture: ComponentFixture<Feature84Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature84Component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature84Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});