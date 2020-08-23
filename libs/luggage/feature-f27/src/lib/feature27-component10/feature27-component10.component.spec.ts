import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature27Component10Component } from './feature27-component10.component';

describe('Feature27Component10Component', () => {
  let component: Feature27Component10Component;
  let fixture: ComponentFixture<Feature27Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature27Component10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature27Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
