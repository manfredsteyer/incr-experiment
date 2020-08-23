import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature40Component21Component } from './feature40-component21.component';

describe('Feature40Component21Component', () => {
  let component: Feature40Component21Component;
  let fixture: ComponentFixture<Feature40Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature40Component21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature40Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
