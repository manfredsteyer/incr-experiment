import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature41Component5Component } from './feature41-component5.component';

describe('Feature41Component5Component', () => {
  let component: Feature41Component5Component;
  let fixture: ComponentFixture<Feature41Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature41Component5Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature41Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
