import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature75Component1Component } from './feature75-component1.component';

describe('Feature75Component1Component', () => {
  let component: Feature75Component1Component;
  let fixture: ComponentFixture<Feature75Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature75Component1Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature75Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
