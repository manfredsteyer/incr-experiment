import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature64Component23Component } from './feature64-component23.component';

describe('Feature64Component23Component', () => {
  let component: Feature64Component23Component;
  let fixture: ComponentFixture<Feature64Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature64Component23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature64Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
