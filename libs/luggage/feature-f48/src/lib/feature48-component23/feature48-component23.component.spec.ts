import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature48Component23Component } from './feature48-component23.component';

describe('Feature48Component23Component', () => {
  let component: Feature48Component23Component;
  let fixture: ComponentFixture<Feature48Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature48Component23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature48Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
