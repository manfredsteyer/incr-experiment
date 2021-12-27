import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature23Component15Component } from './feature23-component15.component';

describe('Feature23Component15Component', () => {
  let component: Feature23Component15Component;
  let fixture: ComponentFixture<Feature23Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature23Component15Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature23Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
