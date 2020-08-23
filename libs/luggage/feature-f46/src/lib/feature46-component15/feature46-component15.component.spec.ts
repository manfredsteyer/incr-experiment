import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature46Component15Component } from './feature46-component15.component';

describe('Feature46Component15Component', () => {
  let component: Feature46Component15Component;
  let fixture: ComponentFixture<Feature46Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature46Component15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature46Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
