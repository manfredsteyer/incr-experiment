import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature82Component10Component } from './feature82-component10.component';

describe('Feature82Component10Component', () => {
  let component: Feature82Component10Component;
  let fixture: ComponentFixture<Feature82Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature82Component10Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature82Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
