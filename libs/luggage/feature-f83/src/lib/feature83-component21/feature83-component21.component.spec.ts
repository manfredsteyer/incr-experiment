import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature83Component21Component } from './feature83-component21.component';

describe('Feature83Component21Component', () => {
  let component: Feature83Component21Component;
  let fixture: ComponentFixture<Feature83Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature83Component21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature83Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
