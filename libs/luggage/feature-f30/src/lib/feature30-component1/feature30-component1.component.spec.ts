import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature30Component1Component } from './feature30-component1.component';

describe('Feature30Component1Component', () => {
  let component: Feature30Component1Component;
  let fixture: ComponentFixture<Feature30Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature30Component1Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature30Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
