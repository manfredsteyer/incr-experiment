import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature95Component29Component } from './feature95-component29.component';

describe('Feature95Component29Component', () => {
  let component: Feature95Component29Component;
  let fixture: ComponentFixture<Feature95Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature95Component29Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature95Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
