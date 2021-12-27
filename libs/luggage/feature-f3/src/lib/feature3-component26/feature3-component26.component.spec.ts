import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature3Component26Component } from './feature3-component26.component';

describe('Feature3Component26Component', () => {
  let component: Feature3Component26Component;
  let fixture: ComponentFixture<Feature3Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature3Component26Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature3Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
