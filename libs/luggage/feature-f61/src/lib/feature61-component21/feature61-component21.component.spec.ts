import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature61Component21Component } from './feature61-component21.component';

describe('Feature61Component21Component', () => {
  let component: Feature61Component21Component;
  let fixture: ComponentFixture<Feature61Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature61Component21Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature61Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
