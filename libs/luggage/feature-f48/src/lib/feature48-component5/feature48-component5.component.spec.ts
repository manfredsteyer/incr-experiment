import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature48Component5Component } from './feature48-component5.component';

describe('Feature48Component5Component', () => {
  let component: Feature48Component5Component;
  let fixture: ComponentFixture<Feature48Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature48Component5Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature48Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
