import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature8Component6Component } from './feature8-component6.component';

describe('Feature8Component6Component', () => {
  let component: Feature8Component6Component;
  let fixture: ComponentFixture<Feature8Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature8Component6Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature8Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
