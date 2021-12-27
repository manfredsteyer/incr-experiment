import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature49Component10Component } from './feature49-component10.component';

describe('Feature49Component10Component', () => {
  let component: Feature49Component10Component;
  let fixture: ComponentFixture<Feature49Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature49Component10Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature49Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
