import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature87Component8Component } from './feature87-component8.component';

describe('Feature87Component8Component', () => {
  let component: Feature87Component8Component;
  let fixture: ComponentFixture<Feature87Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature87Component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature87Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
