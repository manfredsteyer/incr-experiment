import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature75Component10Component } from './feature75-component10.component';

describe('Feature75Component10Component', () => {
  let component: Feature75Component10Component;
  let fixture: ComponentFixture<Feature75Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature75Component10Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature75Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
