import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature71Component8Component } from './feature71-component8.component';

describe('Feature71Component8Component', () => {
  let component: Feature71Component8Component;
  let fixture: ComponentFixture<Feature71Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature71Component8Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature71Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
