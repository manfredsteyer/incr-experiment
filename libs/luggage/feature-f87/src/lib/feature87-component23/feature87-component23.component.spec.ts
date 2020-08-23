import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature87Component23Component } from './feature87-component23.component';

describe('Feature87Component23Component', () => {
  let component: Feature87Component23Component;
  let fixture: ComponentFixture<Feature87Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature87Component23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature87Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
