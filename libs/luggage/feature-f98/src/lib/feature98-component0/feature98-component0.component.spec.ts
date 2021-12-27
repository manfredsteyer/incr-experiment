import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature98Component0Component } from './feature98-component0.component';

describe('Feature98Component0Component', () => {
  let component: Feature98Component0Component;
  let fixture: ComponentFixture<Feature98Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature98Component0Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature98Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
