import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature20Component5Component } from './feature20-component5.component';

describe('Feature20Component5Component', () => {
  let component: Feature20Component5Component;
  let fixture: ComponentFixture<Feature20Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature20Component5Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature20Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
