import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature7Component21Component } from './feature7-component21.component';

describe('Feature7Component21Component', () => {
  let component: Feature7Component21Component;
  let fixture: ComponentFixture<Feature7Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature7Component21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature7Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
