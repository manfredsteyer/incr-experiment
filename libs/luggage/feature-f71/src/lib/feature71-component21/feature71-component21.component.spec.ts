import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature71Component21Component } from './feature71-component21.component';

describe('Feature71Component21Component', () => {
  let component: Feature71Component21Component;
  let fixture: ComponentFixture<Feature71Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature71Component21Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature71Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
