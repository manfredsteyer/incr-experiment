import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature29Component14Component } from './feature29-component14.component';

describe('Feature29Component14Component', () => {
  let component: Feature29Component14Component;
  let fixture: ComponentFixture<Feature29Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature29Component14Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature29Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
