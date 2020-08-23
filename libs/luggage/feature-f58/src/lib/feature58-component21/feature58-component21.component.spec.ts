import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature58Component21Component } from './feature58-component21.component';

describe('Feature58Component21Component', () => {
  let component: Feature58Component21Component;
  let fixture: ComponentFixture<Feature58Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature58Component21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature58Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
