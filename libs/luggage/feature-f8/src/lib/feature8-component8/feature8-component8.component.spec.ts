import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature8Component8Component } from './feature8-component8.component';

describe('Feature8Component8Component', () => {
  let component: Feature8Component8Component;
  let fixture: ComponentFixture<Feature8Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature8Component8Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature8Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
