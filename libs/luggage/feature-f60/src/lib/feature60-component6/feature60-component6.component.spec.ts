import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature60Component6Component } from './feature60-component6.component';

describe('Feature60Component6Component', () => {
  let component: Feature60Component6Component;
  let fixture: ComponentFixture<Feature60Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature60Component6Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature60Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
