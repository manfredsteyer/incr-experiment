import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature55Component21Component } from './feature55-component21.component';

describe('Feature55Component21Component', () => {
  let component: Feature55Component21Component;
  let fixture: ComponentFixture<Feature55Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature55Component21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature55Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
