import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature40Component1Component } from './feature40-component1.component';

describe('Feature40Component1Component', () => {
  let component: Feature40Component1Component;
  let fixture: ComponentFixture<Feature40Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature40Component1Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature40Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
