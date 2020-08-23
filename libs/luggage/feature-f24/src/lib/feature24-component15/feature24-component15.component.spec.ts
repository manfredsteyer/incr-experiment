import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature24Component15Component } from './feature24-component15.component';

describe('Feature24Component15Component', () => {
  let component: Feature24Component15Component;
  let fixture: ComponentFixture<Feature24Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature24Component15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature24Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
