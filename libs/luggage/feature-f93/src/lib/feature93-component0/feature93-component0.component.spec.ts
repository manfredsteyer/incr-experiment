import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature93Component0Component } from './feature93-component0.component';

describe('Feature93Component0Component', () => {
  let component: Feature93Component0Component;
  let fixture: ComponentFixture<Feature93Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature93Component0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature93Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
