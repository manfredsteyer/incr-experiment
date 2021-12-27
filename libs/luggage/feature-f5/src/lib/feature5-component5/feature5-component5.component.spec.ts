import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature5Component5Component } from './feature5-component5.component';

describe('Feature5Component5Component', () => {
  let component: Feature5Component5Component;
  let fixture: ComponentFixture<Feature5Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature5Component5Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature5Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
