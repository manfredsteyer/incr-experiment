import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature73Component15Component } from './feature73-component15.component';

describe('Feature73Component15Component', () => {
  let component: Feature73Component15Component;
  let fixture: ComponentFixture<Feature73Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature73Component15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature73Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
