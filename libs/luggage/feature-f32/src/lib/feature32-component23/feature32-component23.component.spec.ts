import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature32Component23Component } from './feature32-component23.component';

describe('Feature32Component23Component', () => {
  let component: Feature32Component23Component;
  let fixture: ComponentFixture<Feature32Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature32Component23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature32Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
