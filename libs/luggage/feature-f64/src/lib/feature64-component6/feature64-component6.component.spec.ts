import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature64Component6Component } from './feature64-component6.component';

describe('Feature64Component6Component', () => {
  let component: Feature64Component6Component;
  let fixture: ComponentFixture<Feature64Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature64Component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature64Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
