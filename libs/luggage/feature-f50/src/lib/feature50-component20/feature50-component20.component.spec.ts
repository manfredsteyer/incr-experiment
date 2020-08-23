import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature50Component20Component } from './feature50-component20.component';

describe('Feature50Component20Component', () => {
  let component: Feature50Component20Component;
  let fixture: ComponentFixture<Feature50Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature50Component20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature50Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
