import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature21Component8Component } from './feature21-component8.component';

describe('Feature21Component8Component', () => {
  let component: Feature21Component8Component;
  let fixture: ComponentFixture<Feature21Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature21Component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature21Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
