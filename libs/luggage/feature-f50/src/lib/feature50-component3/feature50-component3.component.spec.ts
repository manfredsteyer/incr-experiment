import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature50Component3Component } from './feature50-component3.component';

describe('Feature50Component3Component', () => {
  let component: Feature50Component3Component;
  let fixture: ComponentFixture<Feature50Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature50Component3Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature50Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
