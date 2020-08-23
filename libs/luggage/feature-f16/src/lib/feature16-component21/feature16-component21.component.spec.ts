import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature16Component21Component } from './feature16-component21.component';

describe('Feature16Component21Component', () => {
  let component: Feature16Component21Component;
  let fixture: ComponentFixture<Feature16Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature16Component21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature16Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
