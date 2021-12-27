import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature47Component1Component } from './feature47-component1.component';

describe('Feature47Component1Component', () => {
  let component: Feature47Component1Component;
  let fixture: ComponentFixture<Feature47Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature47Component1Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature47Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
