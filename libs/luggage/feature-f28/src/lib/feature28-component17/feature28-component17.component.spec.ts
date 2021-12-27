import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature28Component17Component } from './feature28-component17.component';

describe('Feature28Component17Component', () => {
  let component: Feature28Component17Component;
  let fixture: ComponentFixture<Feature28Component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature28Component17Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature28Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
