import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature92Component21Component } from './feature92-component21.component';

describe('Feature92Component21Component', () => {
  let component: Feature92Component21Component;
  let fixture: ComponentFixture<Feature92Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature92Component21Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature92Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
