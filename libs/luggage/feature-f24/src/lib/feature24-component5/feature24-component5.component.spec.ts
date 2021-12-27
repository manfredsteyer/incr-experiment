import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature24Component5Component } from './feature24-component5.component';

describe('Feature24Component5Component', () => {
  let component: Feature24Component5Component;
  let fixture: ComponentFixture<Feature24Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature24Component5Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature24Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
