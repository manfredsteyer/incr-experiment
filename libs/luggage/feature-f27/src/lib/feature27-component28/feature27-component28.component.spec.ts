import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature27Component28Component } from './feature27-component28.component';

describe('Feature27Component28Component', () => {
  let component: Feature27Component28Component;
  let fixture: ComponentFixture<Feature27Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature27Component28Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature27Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
