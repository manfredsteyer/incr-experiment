import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature27Component21Component } from './feature27-component21.component';

describe('Feature27Component21Component', () => {
  let component: Feature27Component21Component;
  let fixture: ComponentFixture<Feature27Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature27Component21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature27Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
