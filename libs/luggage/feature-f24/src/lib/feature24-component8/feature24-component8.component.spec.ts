import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature24Component8Component } from './feature24-component8.component';

describe('Feature24Component8Component', () => {
  let component: Feature24Component8Component;
  let fixture: ComponentFixture<Feature24Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature24Component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature24Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
