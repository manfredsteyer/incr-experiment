import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature5Component18Component } from './feature5-component18.component';

describe('Feature5Component18Component', () => {
  let component: Feature5Component18Component;
  let fixture: ComponentFixture<Feature5Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature5Component18Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature5Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
