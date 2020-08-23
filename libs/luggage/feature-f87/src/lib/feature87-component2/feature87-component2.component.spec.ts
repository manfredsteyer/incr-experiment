import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature87Component2Component } from './feature87-component2.component';

describe('Feature87Component2Component', () => {
  let component: Feature87Component2Component;
  let fixture: ComponentFixture<Feature87Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature87Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature87Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
