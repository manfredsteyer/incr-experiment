import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature29Component8Component } from './feature29-component8.component';

describe('Feature29Component8Component', () => {
  let component: Feature29Component8Component;
  let fixture: ComponentFixture<Feature29Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature29Component8Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature29Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
