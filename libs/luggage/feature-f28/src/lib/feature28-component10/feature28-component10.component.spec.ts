import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature28Component10Component } from './feature28-component10.component';

describe('Feature28Component10Component', () => {
  let component: Feature28Component10Component;
  let fixture: ComponentFixture<Feature28Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature28Component10Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature28Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
