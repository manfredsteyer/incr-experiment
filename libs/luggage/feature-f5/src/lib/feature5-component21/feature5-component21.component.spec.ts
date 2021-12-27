import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature5Component21Component } from './feature5-component21.component';

describe('Feature5Component21Component', () => {
  let component: Feature5Component21Component;
  let fixture: ComponentFixture<Feature5Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature5Component21Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature5Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
