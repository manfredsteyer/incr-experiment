import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature92Component23Component } from './feature92-component23.component';

describe('Feature92Component23Component', () => {
  let component: Feature92Component23Component;
  let fixture: ComponentFixture<Feature92Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature92Component23Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature92Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
