import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature50Component21Component } from './feature50-component21.component';

describe('Feature50Component21Component', () => {
  let component: Feature50Component21Component;
  let fixture: ComponentFixture<Feature50Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature50Component21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature50Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
