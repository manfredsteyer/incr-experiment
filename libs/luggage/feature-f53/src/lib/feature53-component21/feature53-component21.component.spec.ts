import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature53Component21Component } from './feature53-component21.component';

describe('Feature53Component21Component', () => {
  let component: Feature53Component21Component;
  let fixture: ComponentFixture<Feature53Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature53Component21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature53Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
