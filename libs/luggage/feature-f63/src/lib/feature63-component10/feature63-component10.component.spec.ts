import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature63Component10Component } from './feature63-component10.component';

describe('Feature63Component10Component', () => {
  let component: Feature63Component10Component;
  let fixture: ComponentFixture<Feature63Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature63Component10Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature63Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
