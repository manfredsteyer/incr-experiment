import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature34Component18Component } from './feature34-component18.component';

describe('Feature34Component18Component', () => {
  let component: Feature34Component18Component;
  let fixture: ComponentFixture<Feature34Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature34Component18Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature34Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
