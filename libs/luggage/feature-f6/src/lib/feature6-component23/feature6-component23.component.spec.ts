import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature6Component23Component } from './feature6-component23.component';

describe('Feature6Component23Component', () => {
  let component: Feature6Component23Component;
  let fixture: ComponentFixture<Feature6Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature6Component23Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature6Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
