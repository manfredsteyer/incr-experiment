import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature94Component15Component } from './feature94-component15.component';

describe('Feature94Component15Component', () => {
  let component: Feature94Component15Component;
  let fixture: ComponentFixture<Feature94Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature94Component15Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature94Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
