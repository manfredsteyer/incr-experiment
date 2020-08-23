import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature60Component18Component } from './feature60-component18.component';

describe('Feature60Component18Component', () => {
  let component: Feature60Component18Component;
  let fixture: ComponentFixture<Feature60Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature60Component18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature60Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
