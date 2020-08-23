import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature87Component7Component } from './feature87-component7.component';

describe('Feature87Component7Component', () => {
  let component: Feature87Component7Component;
  let fixture: ComponentFixture<Feature87Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature87Component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature87Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
