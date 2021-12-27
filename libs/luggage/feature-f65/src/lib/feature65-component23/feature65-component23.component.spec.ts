import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature65Component23Component } from './feature65-component23.component';

describe('Feature65Component23Component', () => {
  let component: Feature65Component23Component;
  let fixture: ComponentFixture<Feature65Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature65Component23Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature65Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
