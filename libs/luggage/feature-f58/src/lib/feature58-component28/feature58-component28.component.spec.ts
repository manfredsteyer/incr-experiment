import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature58Component28Component } from './feature58-component28.component';

describe('Feature58Component28Component', () => {
  let component: Feature58Component28Component;
  let fixture: ComponentFixture<Feature58Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature58Component28Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature58Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
