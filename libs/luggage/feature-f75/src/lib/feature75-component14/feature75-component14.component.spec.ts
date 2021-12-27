import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature75Component14Component } from './feature75-component14.component';

describe('Feature75Component14Component', () => {
  let component: Feature75Component14Component;
  let fixture: ComponentFixture<Feature75Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature75Component14Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature75Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
