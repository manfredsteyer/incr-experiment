import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature73Component5Component } from './feature73-component5.component';

describe('Feature73Component5Component', () => {
  let component: Feature73Component5Component;
  let fixture: ComponentFixture<Feature73Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature73Component5Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature73Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
