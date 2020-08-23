import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature58Component10Component } from './feature58-component10.component';

describe('Feature58Component10Component', () => {
  let component: Feature58Component10Component;
  let fixture: ComponentFixture<Feature58Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature58Component10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature58Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
