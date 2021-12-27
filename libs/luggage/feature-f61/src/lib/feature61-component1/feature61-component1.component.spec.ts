import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature61Component1Component } from './feature61-component1.component';

describe('Feature61Component1Component', () => {
  let component: Feature61Component1Component;
  let fixture: ComponentFixture<Feature61Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature61Component1Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature61Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
