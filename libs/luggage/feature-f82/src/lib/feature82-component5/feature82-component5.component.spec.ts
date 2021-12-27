import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature82Component5Component } from './feature82-component5.component';

describe('Feature82Component5Component', () => {
  let component: Feature82Component5Component;
  let fixture: ComponentFixture<Feature82Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature82Component5Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature82Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
