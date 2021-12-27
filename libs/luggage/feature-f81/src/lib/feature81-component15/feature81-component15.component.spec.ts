import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature81Component15Component } from './feature81-component15.component';

describe('Feature81Component15Component', () => {
  let component: Feature81Component15Component;
  let fixture: ComponentFixture<Feature81Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature81Component15Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature81Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
