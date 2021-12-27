import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature71Component1Component } from './feature71-component1.component';

describe('Feature71Component1Component', () => {
  let component: Feature71Component1Component;
  let fixture: ComponentFixture<Feature71Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature71Component1Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature71Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
