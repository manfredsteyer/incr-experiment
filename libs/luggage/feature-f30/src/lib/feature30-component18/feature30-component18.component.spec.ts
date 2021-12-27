import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature30Component18Component } from './feature30-component18.component';

describe('Feature30Component18Component', () => {
  let component: Feature30Component18Component;
  let fixture: ComponentFixture<Feature30Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature30Component18Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature30Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
