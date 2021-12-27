import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature92Component0Component } from './feature92-component0.component';

describe('Feature92Component0Component', () => {
  let component: Feature92Component0Component;
  let fixture: ComponentFixture<Feature92Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature92Component0Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature92Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
