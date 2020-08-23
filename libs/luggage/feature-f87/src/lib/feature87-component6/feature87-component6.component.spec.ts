import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature87Component6Component } from './feature87-component6.component';

describe('Feature87Component6Component', () => {
  let component: Feature87Component6Component;
  let fixture: ComponentFixture<Feature87Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature87Component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature87Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
