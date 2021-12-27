import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature5Component10Component } from './feature5-component10.component';

describe('Feature5Component10Component', () => {
  let component: Feature5Component10Component;
  let fixture: ComponentFixture<Feature5Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature5Component10Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature5Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
