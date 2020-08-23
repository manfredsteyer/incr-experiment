import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature12Component10Component } from './feature12-component10.component';

describe('Feature12Component10Component', () => {
  let component: Feature12Component10Component;
  let fixture: ComponentFixture<Feature12Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature12Component10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature12Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
