import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature88Component15Component } from './feature88-component15.component';

describe('Feature88Component15Component', () => {
  let component: Feature88Component15Component;
  let fixture: ComponentFixture<Feature88Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature88Component15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature88Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
