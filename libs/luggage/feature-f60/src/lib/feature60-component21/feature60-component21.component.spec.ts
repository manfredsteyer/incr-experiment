import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature60Component21Component } from './feature60-component21.component';

describe('Feature60Component21Component', () => {
  let component: Feature60Component21Component;
  let fixture: ComponentFixture<Feature60Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature60Component21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature60Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
