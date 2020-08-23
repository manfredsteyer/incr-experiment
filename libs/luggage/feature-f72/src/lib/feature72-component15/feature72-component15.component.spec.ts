import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature72Component15Component } from './feature72-component15.component';

describe('Feature72Component15Component', () => {
  let component: Feature72Component15Component;
  let fixture: ComponentFixture<Feature72Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature72Component15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature72Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
