import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature75Component8Component } from './feature75-component8.component';

describe('Feature75Component8Component', () => {
  let component: Feature75Component8Component;
  let fixture: ComponentFixture<Feature75Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature75Component8Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature75Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
