import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature33Component23Component } from './feature33-component23.component';

describe('Feature33Component23Component', () => {
  let component: Feature33Component23Component;
  let fixture: ComponentFixture<Feature33Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature33Component23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature33Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
