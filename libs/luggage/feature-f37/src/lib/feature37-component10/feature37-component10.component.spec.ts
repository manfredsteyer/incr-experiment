import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature37Component10Component } from './feature37-component10.component';

describe('Feature37Component10Component', () => {
  let component: Feature37Component10Component;
  let fixture: ComponentFixture<Feature37Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature37Component10Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature37Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
