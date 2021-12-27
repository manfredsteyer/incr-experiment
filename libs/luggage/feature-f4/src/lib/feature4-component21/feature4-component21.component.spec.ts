import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature4Component21Component } from './feature4-component21.component';

describe('Feature4Component21Component', () => {
  let component: Feature4Component21Component;
  let fixture: ComponentFixture<Feature4Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature4Component21Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature4Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
