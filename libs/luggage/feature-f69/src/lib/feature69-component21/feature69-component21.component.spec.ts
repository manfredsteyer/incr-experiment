import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature69Component21Component } from './feature69-component21.component';

describe('Feature69Component21Component', () => {
  let component: Feature69Component21Component;
  let fixture: ComponentFixture<Feature69Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature69Component21Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature69Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
