import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature69Component10Component } from './feature69-component10.component';

describe('Feature69Component10Component', () => {
  let component: Feature69Component10Component;
  let fixture: ComponentFixture<Feature69Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature69Component10Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature69Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
