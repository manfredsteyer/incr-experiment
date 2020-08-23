import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature15Component8Component } from './feature15-component8.component';

describe('Feature15Component8Component', () => {
  let component: Feature15Component8Component;
  let fixture: ComponentFixture<Feature15Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature15Component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature15Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
