import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature37Component8Component } from './feature37-component8.component';

describe('Feature37Component8Component', () => {
  let component: Feature37Component8Component;
  let fixture: ComponentFixture<Feature37Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature37Component8Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature37Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
