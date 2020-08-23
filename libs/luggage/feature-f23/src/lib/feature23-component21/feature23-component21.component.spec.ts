import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature23Component21Component } from './feature23-component21.component';

describe('Feature23Component21Component', () => {
  let component: Feature23Component21Component;
  let fixture: ComponentFixture<Feature23Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature23Component21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature23Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
