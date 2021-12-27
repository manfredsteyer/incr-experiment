import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature15Component5Component } from './feature15-component5.component';

describe('Feature15Component5Component', () => {
  let component: Feature15Component5Component;
  let fixture: ComponentFixture<Feature15Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature15Component5Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature15Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
