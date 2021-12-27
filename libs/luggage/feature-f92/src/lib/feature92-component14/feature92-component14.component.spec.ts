import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature92Component14Component } from './feature92-component14.component';

describe('Feature92Component14Component', () => {
  let component: Feature92Component14Component;
  let fixture: ComponentFixture<Feature92Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature92Component14Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature92Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
