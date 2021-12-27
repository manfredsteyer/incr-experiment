import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature6Component10Component } from './feature6-component10.component';

describe('Feature6Component10Component', () => {
  let component: Feature6Component10Component;
  let fixture: ComponentFixture<Feature6Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature6Component10Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature6Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
