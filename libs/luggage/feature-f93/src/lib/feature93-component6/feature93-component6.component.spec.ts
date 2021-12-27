import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature93Component6Component } from './feature93-component6.component';

describe('Feature93Component6Component', () => {
  let component: Feature93Component6Component;
  let fixture: ComponentFixture<Feature93Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature93Component6Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature93Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
