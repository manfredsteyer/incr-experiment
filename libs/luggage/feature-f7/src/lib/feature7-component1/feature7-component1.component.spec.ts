import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature7Component1Component } from './feature7-component1.component';

describe('Feature7Component1Component', () => {
  let component: Feature7Component1Component;
  let fixture: ComponentFixture<Feature7Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature7Component1Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature7Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
