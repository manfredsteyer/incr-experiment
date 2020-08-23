import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature10Component15Component } from './feature10-component15.component';

describe('Feature10Component15Component', () => {
  let component: Feature10Component15Component;
  let fixture: ComponentFixture<Feature10Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature10Component15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature10Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
