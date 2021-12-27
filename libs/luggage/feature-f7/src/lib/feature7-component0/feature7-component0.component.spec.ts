import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature7Component0Component } from './feature7-component0.component';

describe('Feature7Component0Component', () => {
  let component: Feature7Component0Component;
  let fixture: ComponentFixture<Feature7Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature7Component0Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature7Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
