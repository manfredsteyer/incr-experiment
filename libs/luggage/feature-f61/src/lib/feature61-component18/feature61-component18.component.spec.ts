import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature61Component18Component } from './feature61-component18.component';

describe('Feature61Component18Component', () => {
  let component: Feature61Component18Component;
  let fixture: ComponentFixture<Feature61Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature61Component18Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature61Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
