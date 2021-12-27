import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature89Component5Component } from './feature89-component5.component';

describe('Feature89Component5Component', () => {
  let component: Feature89Component5Component;
  let fixture: ComponentFixture<Feature89Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature89Component5Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature89Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
