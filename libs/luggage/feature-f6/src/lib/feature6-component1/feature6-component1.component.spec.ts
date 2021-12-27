import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature6Component1Component } from './feature6-component1.component';

describe('Feature6Component1Component', () => {
  let component: Feature6Component1Component;
  let fixture: ComponentFixture<Feature6Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature6Component1Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature6Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
