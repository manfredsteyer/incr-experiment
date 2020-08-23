import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature20Component21Component } from './feature20-component21.component';

describe('Feature20Component21Component', () => {
  let component: Feature20Component21Component;
  let fixture: ComponentFixture<Feature20Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature20Component21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature20Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
