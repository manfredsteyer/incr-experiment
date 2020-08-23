import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature15Component21Component } from './feature15-component21.component';

describe('Feature15Component21Component', () => {
  let component: Feature15Component21Component;
  let fixture: ComponentFixture<Feature15Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature15Component21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature15Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
