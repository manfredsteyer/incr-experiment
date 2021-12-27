import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature65Component1Component } from './feature65-component1.component';

describe('Feature65Component1Component', () => {
  let component: Feature65Component1Component;
  let fixture: ComponentFixture<Feature65Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature65Component1Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature65Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
