import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature93Component23Component } from './feature93-component23.component';

describe('Feature93Component23Component', () => {
  let component: Feature93Component23Component;
  let fixture: ComponentFixture<Feature93Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature93Component23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature93Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
