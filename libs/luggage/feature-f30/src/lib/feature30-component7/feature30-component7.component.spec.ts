import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature30Component7Component } from './feature30-component7.component';

describe('Feature30Component7Component', () => {
  let component: Feature30Component7Component;
  let fixture: ComponentFixture<Feature30Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature30Component7Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature30Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
