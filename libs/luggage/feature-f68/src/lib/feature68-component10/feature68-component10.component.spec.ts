import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature68Component10Component } from './feature68-component10.component';

describe('Feature68Component10Component', () => {
  let component: Feature68Component10Component;
  let fixture: ComponentFixture<Feature68Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature68Component10Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature68Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
