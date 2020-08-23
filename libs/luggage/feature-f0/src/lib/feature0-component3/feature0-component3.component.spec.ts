import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature0Component3Component } from './feature0-component3.component';

describe('Feature0Component3Component', () => {
  let component: Feature0Component3Component;
  let fixture: ComponentFixture<Feature0Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature0Component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature0Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
