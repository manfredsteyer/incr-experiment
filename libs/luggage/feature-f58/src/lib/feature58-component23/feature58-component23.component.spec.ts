import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature58Component23Component } from './feature58-component23.component';

describe('Feature58Component23Component', () => {
  let component: Feature58Component23Component;
  let fixture: ComponentFixture<Feature58Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature58Component23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature58Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
