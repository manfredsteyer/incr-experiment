import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature64Component8Component } from './feature64-component8.component';

describe('Feature64Component8Component', () => {
  let component: Feature64Component8Component;
  let fixture: ComponentFixture<Feature64Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature64Component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature64Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
