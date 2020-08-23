import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature72Component21Component } from './feature72-component21.component';

describe('Feature72Component21Component', () => {
  let component: Feature72Component21Component;
  let fixture: ComponentFixture<Feature72Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature72Component21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature72Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
