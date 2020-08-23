import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature0Component1Component } from './feature0-component1.component';

describe('Feature0Component1Component', () => {
  let component: Feature0Component1Component;
  let fixture: ComponentFixture<Feature0Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature0Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature0Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
