import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature86Component14Component } from './feature86-component14.component';

describe('Feature86Component14Component', () => {
  let component: Feature86Component14Component;
  let fixture: ComponentFixture<Feature86Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature86Component14Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature86Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
