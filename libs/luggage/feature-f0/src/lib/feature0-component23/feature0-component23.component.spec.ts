import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature0Component23Component } from './feature0-component23.component';

describe('Feature0Component23Component', () => {
  let component: Feature0Component23Component;
  let fixture: ComponentFixture<Feature0Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature0Component23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature0Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
