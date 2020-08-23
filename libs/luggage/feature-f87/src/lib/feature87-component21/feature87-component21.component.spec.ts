import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature87Component21Component } from './feature87-component21.component';

describe('Feature87Component21Component', () => {
  let component: Feature87Component21Component;
  let fixture: ComponentFixture<Feature87Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature87Component21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature87Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
