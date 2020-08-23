import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature0Component21Component } from './feature0-component21.component';

describe('Feature0Component21Component', () => {
  let component: Feature0Component21Component;
  let fixture: ComponentFixture<Feature0Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature0Component21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature0Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
