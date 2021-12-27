import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature79Component8Component } from './feature79-component8.component';

describe('Feature79Component8Component', () => {
  let component: Feature79Component8Component;
  let fixture: ComponentFixture<Feature79Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature79Component8Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature79Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
