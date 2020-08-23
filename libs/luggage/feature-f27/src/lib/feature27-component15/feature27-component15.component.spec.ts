import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature27Component15Component } from './feature27-component15.component';

describe('Feature27Component15Component', () => {
  let component: Feature27Component15Component;
  let fixture: ComponentFixture<Feature27Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature27Component15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature27Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
