import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature51Component21Component } from './feature51-component21.component';

describe('Feature51Component21Component', () => {
  let component: Feature51Component21Component;
  let fixture: ComponentFixture<Feature51Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature51Component21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature51Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
