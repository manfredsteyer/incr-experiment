import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature20Component15Component } from './feature20-component15.component';

describe('Feature20Component15Component', () => {
  let component: Feature20Component15Component;
  let fixture: ComponentFixture<Feature20Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature20Component15Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature20Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
