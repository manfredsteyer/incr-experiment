import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature73Component8Component } from './feature73-component8.component';

describe('Feature73Component8Component', () => {
  let component: Feature73Component8Component;
  let fixture: ComponentFixture<Feature73Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature73Component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature73Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
