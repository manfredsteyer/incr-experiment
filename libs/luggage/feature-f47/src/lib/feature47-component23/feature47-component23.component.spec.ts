import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature47Component23Component } from './feature47-component23.component';

describe('Feature47Component23Component', () => {
  let component: Feature47Component23Component;
  let fixture: ComponentFixture<Feature47Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature47Component23Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature47Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
