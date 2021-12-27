import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature7Component10Component } from './feature7-component10.component';

describe('Feature7Component10Component', () => {
  let component: Feature7Component10Component;
  let fixture: ComponentFixture<Feature7Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature7Component10Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature7Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
