import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature75Component18Component } from './feature75-component18.component';

describe('Feature75Component18Component', () => {
  let component: Feature75Component18Component;
  let fixture: ComponentFixture<Feature75Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature75Component18Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature75Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
