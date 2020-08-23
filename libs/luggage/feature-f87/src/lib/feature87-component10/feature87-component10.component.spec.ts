import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature87Component10Component } from './feature87-component10.component';

describe('Feature87Component10Component', () => {
  let component: Feature87Component10Component;
  let fixture: ComponentFixture<Feature87Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature87Component10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature87Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
