import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature54Component0Component } from './feature54-component0.component';

describe('Feature54Component0Component', () => {
  let component: Feature54Component0Component;
  let fixture: ComponentFixture<Feature54Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature54Component0Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature54Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
