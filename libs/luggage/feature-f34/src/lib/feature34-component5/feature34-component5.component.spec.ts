import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature34Component5Component } from './feature34-component5.component';

describe('Feature34Component5Component', () => {
  let component: Feature34Component5Component;
  let fixture: ComponentFixture<Feature34Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature34Component5Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature34Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
