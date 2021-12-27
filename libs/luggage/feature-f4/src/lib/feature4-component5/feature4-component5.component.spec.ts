import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature4Component5Component } from './feature4-component5.component';

describe('Feature4Component5Component', () => {
  let component: Feature4Component5Component;
  let fixture: ComponentFixture<Feature4Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature4Component5Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature4Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
