import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature38Component23Component } from './feature38-component23.component';

describe('Feature38Component23Component', () => {
  let component: Feature38Component23Component;
  let fixture: ComponentFixture<Feature38Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature38Component23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature38Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
