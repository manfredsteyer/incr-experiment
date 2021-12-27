import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature67Component26Component } from './feature67-component26.component';

describe('Feature67Component26Component', () => {
  let component: Feature67Component26Component;
  let fixture: ComponentFixture<Feature67Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature67Component26Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature67Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
