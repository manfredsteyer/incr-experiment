import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature25Component23Component } from './feature25-component23.component';

describe('Feature25Component23Component', () => {
  let component: Feature25Component23Component;
  let fixture: ComponentFixture<Feature25Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature25Component23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature25Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
