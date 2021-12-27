import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature29Component0Component } from './feature29-component0.component';

describe('Feature29Component0Component', () => {
  let component: Feature29Component0Component;
  let fixture: ComponentFixture<Feature29Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature29Component0Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature29Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
