import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature25Component8Component } from './feature25-component8.component';

describe('Feature25Component8Component', () => {
  let component: Feature25Component8Component;
  let fixture: ComponentFixture<Feature25Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature25Component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature25Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
