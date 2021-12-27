import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature37Component1Component } from './feature37-component1.component';

describe('Feature37Component1Component', () => {
  let component: Feature37Component1Component;
  let fixture: ComponentFixture<Feature37Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature37Component1Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature37Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
