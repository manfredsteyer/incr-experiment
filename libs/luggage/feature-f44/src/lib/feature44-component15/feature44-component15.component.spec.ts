import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature44Component15Component } from './feature44-component15.component';

describe('Feature44Component15Component', () => {
  let component: Feature44Component15Component;
  let fixture: ComponentFixture<Feature44Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature44Component15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature44Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
