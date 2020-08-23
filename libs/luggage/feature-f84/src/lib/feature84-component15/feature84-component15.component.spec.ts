import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature84Component15Component } from './feature84-component15.component';

describe('Feature84Component15Component', () => {
  let component: Feature84Component15Component;
  let fixture: ComponentFixture<Feature84Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature84Component15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature84Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
