import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature68Component18Component } from './feature68-component18.component';

describe('Feature68Component18Component', () => {
  let component: Feature68Component18Component;
  let fixture: ComponentFixture<Feature68Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature68Component18Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature68Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
