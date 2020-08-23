import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature76Component8Component } from './feature76-component8.component';

describe('Feature76Component8Component', () => {
  let component: Feature76Component8Component;
  let fixture: ComponentFixture<Feature76Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature76Component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature76Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
