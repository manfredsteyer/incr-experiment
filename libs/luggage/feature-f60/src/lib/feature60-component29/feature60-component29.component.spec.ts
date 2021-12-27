import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature60Component29Component } from './feature60-component29.component';

describe('Feature60Component29Component', () => {
  let component: Feature60Component29Component;
  let fixture: ComponentFixture<Feature60Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature60Component29Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature60Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
