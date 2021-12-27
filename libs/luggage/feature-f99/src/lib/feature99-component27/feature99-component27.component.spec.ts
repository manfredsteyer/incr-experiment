import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature99Component27Component } from './feature99-component27.component';

describe('Feature99Component27Component', () => {
  let component: Feature99Component27Component;
  let fixture: ComponentFixture<Feature99Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature99Component27Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature99Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
