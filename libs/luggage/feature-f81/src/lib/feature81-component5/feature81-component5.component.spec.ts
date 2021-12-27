import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature81Component5Component } from './feature81-component5.component';

describe('Feature81Component5Component', () => {
  let component: Feature81Component5Component;
  let fixture: ComponentFixture<Feature81Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature81Component5Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature81Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
