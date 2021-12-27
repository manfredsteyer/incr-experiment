import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature30Component8Component } from './feature30-component8.component';

describe('Feature30Component8Component', () => {
  let component: Feature30Component8Component;
  let fixture: ComponentFixture<Feature30Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature30Component8Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature30Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
