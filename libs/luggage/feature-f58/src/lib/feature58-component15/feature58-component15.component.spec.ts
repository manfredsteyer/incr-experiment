import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature58Component15Component } from './feature58-component15.component';

describe('Feature58Component15Component', () => {
  let component: Feature58Component15Component;
  let fixture: ComponentFixture<Feature58Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature58Component15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature58Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
