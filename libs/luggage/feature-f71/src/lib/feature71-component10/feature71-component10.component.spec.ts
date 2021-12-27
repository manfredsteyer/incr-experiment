import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature71Component10Component } from './feature71-component10.component';

describe('Feature71Component10Component', () => {
  let component: Feature71Component10Component;
  let fixture: ComponentFixture<Feature71Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature71Component10Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature71Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
