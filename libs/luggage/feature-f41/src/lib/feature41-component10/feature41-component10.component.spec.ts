import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature41Component10Component } from './feature41-component10.component';

describe('Feature41Component10Component', () => {
  let component: Feature41Component10Component;
  let fixture: ComponentFixture<Feature41Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature41Component10Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature41Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
