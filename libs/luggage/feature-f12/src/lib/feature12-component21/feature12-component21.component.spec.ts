import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature12Component21Component } from './feature12-component21.component';

describe('Feature12Component21Component', () => {
  let component: Feature12Component21Component;
  let fixture: ComponentFixture<Feature12Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature12Component21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature12Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
