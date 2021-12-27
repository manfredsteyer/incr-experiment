import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature79Component23Component } from './feature79-component23.component';

describe('Feature79Component23Component', () => {
  let component: Feature79Component23Component;
  let fixture: ComponentFixture<Feature79Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature79Component23Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature79Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
