import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature61Component10Component } from './feature61-component10.component';

describe('Feature61Component10Component', () => {
  let component: Feature61Component10Component;
  let fixture: ComponentFixture<Feature61Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature61Component10Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature61Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
