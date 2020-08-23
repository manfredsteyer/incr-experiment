import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature98Component21Component } from './feature98-component21.component';

describe('Feature98Component21Component', () => {
  let component: Feature98Component21Component;
  let fixture: ComponentFixture<Feature98Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature98Component21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature98Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
