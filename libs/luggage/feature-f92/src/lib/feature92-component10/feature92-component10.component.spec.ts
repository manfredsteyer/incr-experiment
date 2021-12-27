import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature92Component10Component } from './feature92-component10.component';

describe('Feature92Component10Component', () => {
  let component: Feature92Component10Component;
  let fixture: ComponentFixture<Feature92Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature92Component10Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature92Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
