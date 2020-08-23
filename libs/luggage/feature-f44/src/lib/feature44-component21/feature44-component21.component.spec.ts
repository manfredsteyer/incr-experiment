import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature44Component21Component } from './feature44-component21.component';

describe('Feature44Component21Component', () => {
  let component: Feature44Component21Component;
  let fixture: ComponentFixture<Feature44Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature44Component21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature44Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
