import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature61Component14Component } from './feature61-component14.component';

describe('Feature61Component14Component', () => {
  let component: Feature61Component14Component;
  let fixture: ComponentFixture<Feature61Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature61Component14Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature61Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
