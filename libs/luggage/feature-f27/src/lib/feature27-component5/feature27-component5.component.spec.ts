import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature27Component5Component } from './feature27-component5.component';

describe('Feature27Component5Component', () => {
  let component: Feature27Component5Component;
  let fixture: ComponentFixture<Feature27Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature27Component5Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature27Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
