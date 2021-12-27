import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature86Component10Component } from './feature86-component10.component';

describe('Feature86Component10Component', () => {
  let component: Feature86Component10Component;
  let fixture: ComponentFixture<Feature86Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature86Component10Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature86Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
