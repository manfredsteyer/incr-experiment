import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature64Component21Component } from './feature64-component21.component';

describe('Feature64Component21Component', () => {
  let component: Feature64Component21Component;
  let fixture: ComponentFixture<Feature64Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature64Component21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature64Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
