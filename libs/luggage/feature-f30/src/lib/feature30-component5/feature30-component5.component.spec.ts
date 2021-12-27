import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature30Component5Component } from './feature30-component5.component';

describe('Feature30Component5Component', () => {
  let component: Feature30Component5Component;
  let fixture: ComponentFixture<Feature30Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature30Component5Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature30Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
