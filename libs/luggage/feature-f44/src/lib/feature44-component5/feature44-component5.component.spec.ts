import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature44Component5Component } from './feature44-component5.component';

describe('Feature44Component5Component', () => {
  let component: Feature44Component5Component;
  let fixture: ComponentFixture<Feature44Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature44Component5Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature44Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
