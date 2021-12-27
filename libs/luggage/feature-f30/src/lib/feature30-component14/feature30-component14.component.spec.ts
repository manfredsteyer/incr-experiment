import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature30Component14Component } from './feature30-component14.component';

describe('Feature30Component14Component', () => {
  let component: Feature30Component14Component;
  let fixture: ComponentFixture<Feature30Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature30Component14Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature30Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
