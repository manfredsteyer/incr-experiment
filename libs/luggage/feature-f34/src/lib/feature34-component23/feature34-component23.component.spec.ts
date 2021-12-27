import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature34Component23Component } from './feature34-component23.component';

describe('Feature34Component23Component', () => {
  let component: Feature34Component23Component;
  let fixture: ComponentFixture<Feature34Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature34Component23Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature34Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
