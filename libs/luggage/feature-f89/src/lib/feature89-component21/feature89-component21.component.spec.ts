import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature89Component21Component } from './feature89-component21.component';

describe('Feature89Component21Component', () => {
  let component: Feature89Component21Component;
  let fixture: ComponentFixture<Feature89Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature89Component21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature89Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
