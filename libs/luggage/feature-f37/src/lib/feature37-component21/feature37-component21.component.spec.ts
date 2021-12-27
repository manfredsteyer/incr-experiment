import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature37Component21Component } from './feature37-component21.component';

describe('Feature37Component21Component', () => {
  let component: Feature37Component21Component;
  let fixture: ComponentFixture<Feature37Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature37Component21Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature37Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
