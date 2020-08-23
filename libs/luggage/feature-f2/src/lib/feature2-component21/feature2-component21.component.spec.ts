import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature2Component21Component } from './feature2-component21.component';

describe('Feature2Component21Component', () => {
  let component: Feature2Component21Component;
  let fixture: ComponentFixture<Feature2Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature2Component21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature2Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
