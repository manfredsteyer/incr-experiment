import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature36Component3Component } from './feature36-component3.component';

describe('Feature36Component3Component', () => {
  let component: Feature36Component3Component;
  let fixture: ComponentFixture<Feature36Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature36Component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature36Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
