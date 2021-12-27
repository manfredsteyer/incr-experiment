import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature25Component26Component } from './feature25-component26.component';

describe('Feature25Component26Component', () => {
  let component: Feature25Component26Component;
  let fixture: ComponentFixture<Feature25Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature25Component26Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature25Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
