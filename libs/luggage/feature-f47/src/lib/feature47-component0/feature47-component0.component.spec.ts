import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature47Component0Component } from './feature47-component0.component';

describe('Feature47Component0Component', () => {
  let component: Feature47Component0Component;
  let fixture: ComponentFixture<Feature47Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature47Component0Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature47Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
