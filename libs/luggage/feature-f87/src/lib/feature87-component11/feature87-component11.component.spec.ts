import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature87Component11Component } from './feature87-component11.component';

describe('Feature87Component11Component', () => {
  let component: Feature87Component11Component;
  let fixture: ComponentFixture<Feature87Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature87Component11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature87Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
