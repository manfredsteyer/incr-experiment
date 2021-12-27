import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature34Component10Component } from './feature34-component10.component';

describe('Feature34Component10Component', () => {
  let component: Feature34Component10Component;
  let fixture: ComponentFixture<Feature34Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature34Component10Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature34Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
