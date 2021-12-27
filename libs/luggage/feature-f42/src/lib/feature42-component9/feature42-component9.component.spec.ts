import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature42Component9Component } from './feature42-component9.component';

describe('Feature42Component9Component', () => {
  let component: Feature42Component9Component;
  let fixture: ComponentFixture<Feature42Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature42Component9Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature42Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
