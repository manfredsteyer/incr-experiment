import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature27Component6Component } from './feature27-component6.component';

describe('Feature27Component6Component', () => {
  let component: Feature27Component6Component;
  let fixture: ComponentFixture<Feature27Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature27Component6Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature27Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
