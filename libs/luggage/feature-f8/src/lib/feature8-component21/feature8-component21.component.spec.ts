import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature8Component21Component } from './feature8-component21.component';

describe('Feature8Component21Component', () => {
  let component: Feature8Component21Component;
  let fixture: ComponentFixture<Feature8Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature8Component21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature8Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
