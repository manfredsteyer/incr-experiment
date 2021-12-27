import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature65Component0Component } from './feature65-component0.component';

describe('Feature65Component0Component', () => {
  let component: Feature65Component0Component;
  let fixture: ComponentFixture<Feature65Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature65Component0Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature65Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
