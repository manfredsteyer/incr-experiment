import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature54Component8Component } from './feature54-component8.component';

describe('Feature54Component8Component', () => {
  let component: Feature54Component8Component;
  let fixture: ComponentFixture<Feature54Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature54Component8Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature54Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
