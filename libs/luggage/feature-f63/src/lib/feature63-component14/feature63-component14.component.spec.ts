import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature63Component14Component } from './feature63-component14.component';

describe('Feature63Component14Component', () => {
  let component: Feature63Component14Component;
  let fixture: ComponentFixture<Feature63Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature63Component14Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature63Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
