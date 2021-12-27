import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature5Component8Component } from './feature5-component8.component';

describe('Feature5Component8Component', () => {
  let component: Feature5Component8Component;
  let fixture: ComponentFixture<Feature5Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature5Component8Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature5Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
