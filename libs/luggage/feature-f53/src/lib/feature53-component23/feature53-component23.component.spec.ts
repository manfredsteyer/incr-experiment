import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature53Component23Component } from './feature53-component23.component';

describe('Feature53Component23Component', () => {
  let component: Feature53Component23Component;
  let fixture: ComponentFixture<Feature53Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature53Component23Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature53Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
