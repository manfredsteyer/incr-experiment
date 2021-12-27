import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature61Component23Component } from './feature61-component23.component';

describe('Feature61Component23Component', () => {
  let component: Feature61Component23Component;
  let fixture: ComponentFixture<Feature61Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature61Component23Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature61Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
