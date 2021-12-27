import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature54Component1Component } from './feature54-component1.component';

describe('Feature54Component1Component', () => {
  let component: Feature54Component1Component;
  let fixture: ComponentFixture<Feature54Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature54Component1Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature54Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
