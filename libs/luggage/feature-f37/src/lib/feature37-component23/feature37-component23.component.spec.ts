import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature37Component23Component } from './feature37-component23.component';

describe('Feature37Component23Component', () => {
  let component: Feature37Component23Component;
  let fixture: ComponentFixture<Feature37Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature37Component23Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature37Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
