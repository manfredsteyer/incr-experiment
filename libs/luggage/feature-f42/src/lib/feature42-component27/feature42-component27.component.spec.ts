import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature42Component27Component } from './feature42-component27.component';

describe('Feature42Component27Component', () => {
  let component: Feature42Component27Component;
  let fixture: ComponentFixture<Feature42Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature42Component27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature42Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
